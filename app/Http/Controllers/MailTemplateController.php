<?php

namespace App\Http\Controllers;

use App\Models\MailTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MailTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$mailTemplates = new MailTemplate;

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

                        $mailTemplates = $mailTemplates->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $mailTemplates = $mailTemplates->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $mailTemplates = $mailTemplates->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $mailTemplates = $mailTemplates->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $mailTemplates = $mailTemplates->sortBy($sort_column);
            }

        }else{
            $mailTemplates = $mailTemplates->sortByDesc('id');
        }



        // (3)paginate
        $mailTemplates = $mailTemplates->paginate(10);

		return view('mailTemplates.index', compact('mailTemplates'))->with( 'lists', MailTemplate::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('mailTemplates.create')->with( 'lists', MailTemplate::getLists() );
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
		$mailTemplate = MailTemplate::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $mailTemplate);
        }

        DB::commit();

		return redirect()->route('mailTemplates.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function show(MailTemplate $mailTemplate)
    {
		return view('mailTemplates.show', compact('mailTemplate'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function edit(MailTemplate $mailTemplate)
    {
		return view('mailTemplates.edit', compact('mailTemplate'))->with( 'lists', MailTemplate::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\MailTemplate  $mailTemplate	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(MailTemplate $mailTemplate)
	{
		return view('mailTemplates.duplicate', compact('mailTemplate'))->with( 'lists', MailTemplate::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function update(MailTemplate $mailTemplate, Request $request)
    {
        $this->varidate($request, $mailTemplate);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$mailTemplate->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $mailTemplate);
        }

        DB::commit();

		return redirect()->route('mailTemplates.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function destroy(MailTemplate $mailTemplate)
    {
		$mailTemplate->delete();
		return redirect()->route('mailTemplates.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, MailTemplate $mailTemplate = null)
    {
        $request->validate(MailTemplate::getValidateRule($mailTemplate));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, MailTemplate $mailTemplate)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $mailTemplate->$method()->sync($pivots);
        }
    }
}
