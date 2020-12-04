<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$mails = new Mail;

        // (1)filltering
        if( is_array($request->input('q')) ){

            foreach( $request->input('q') as $key => $value ){

                if($key !== 's'){

                    $parts = preg_split('~:(?=[^:]*$)~', $key);

                    $searchParts = preg_split('~\.(?=[^\.]*$)~', $parts[0]);
                    // dd($parts, $searchParts);

                    $column_name = $searchParts[0];
                    $related_column_name = isset($searchParts[1]) ? $searchParts[1] : '';

                    $operatorSymbol = isset($parts[1]) ? $parts[1] : 'cont';

                    if ($operatorSymbol == 'eq') {
                        $operator = '=';
                    } elseif ($operatorSymbol == 'cont') {
                        $operator = 'like';
                        $value = '%' . $value . '%';
                    } elseif ($operatorSymbol == 'gt') {
                        $operator = '>=';
                    } elseif ($operatorSymbol == 'lt') {
                        $operator = '<=';
                    } else {
                        $operator = 'like';
                        $value = '%' . $value . '%';
                    }

                    if( $related_column_name !== '' ){  // search at related table column

                        $mails = $mails->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $mails = $mails->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $mails = $mails->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $mails = $mails->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $mails = $mails->sortBy($sort_column);
            }

        }else{
            $mails = $mails->sortByDesc('id');
        }



        // (3)paginate
        $mails = $mails->paginate(10);

		return view('mails.index', compact('mails'))->with( 'lists', Mail::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('mails.create')->with( 'lists', Mail::getLists() );
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->varidate($request);

        $input = $request->input('model');

        DB::beginTransaction();


		//create data
		$mail = Mail::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $mail);
        }

        DB::commit();

		return redirect()->route('mails.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function show(Mail $mail)
    {
		return view('mails.show', compact('mail'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function edit(Mail $mail)
    {
		return view('mails.edit', compact('mail'))->with( 'lists', Mail::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\Mail  $mail	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(Mail $mail)
	{
		return view('mails.duplicate', compact('mail'))->with( 'lists', Mail::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function update(Mail $mail, Request $request)
    {
        $this->varidate($request, $mail);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$mail->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $mail);
        }

        DB::commit();

		return redirect()->route('mails.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function destroy(Mail $mail)
    {
		$mail->delete();
		return redirect()->route('mails.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, Mail $mail = null)
    {
        $request->validate(Mail::getValidateRule($mail));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Mail $mail)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $mail->$method()->sync($pivots);
        }
    }
}
