<?php

namespace App\Http\Controllers;

use App\Models\CompPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompPhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$compPhones = new CompPhone;

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

                        $compPhones = $compPhones->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $compPhones = $compPhones->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $compPhones = $compPhones->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $compPhones = $compPhones->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $compPhones = $compPhones->sortBy($sort_column);
            }

        }else{
            $compPhones = $compPhones->sortByDesc('id');
        }



        // (3)paginate
        $compPhones = $compPhones->paginate(10);

		return view('compPhones.index', compact('compPhones'))->with( 'lists', CompPhone::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('compPhones.create')->with( 'lists', CompPhone::getLists() );
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
		$compPhone = CompPhone::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compPhone);
        }

        DB::commit();

		return redirect()->route('compPhones.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function show(CompPhone $compPhone)
    {
		return view('compPhones.show', compact('compPhone'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function edit(CompPhone $compPhone)
    {
		return view('compPhones.edit', compact('compPhone'))->with( 'lists', CompPhone::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CompPhone  $compPhone	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CompPhone $compPhone)
	{
		return view('compPhones.duplicate', compact('compPhone'))->with( 'lists', CompPhone::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function update(CompPhone $compPhone, Request $request)
    {
        $this->varidate($request, $compPhone);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$compPhone->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compPhone);
        }

        DB::commit();

		return redirect()->route('compPhones.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function destroy(CompPhone $compPhone)
    {
		$compPhone->delete();
		return redirect()->route('compPhones.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CompPhone $compPhone = null)
    {
        $request->validate(CompPhone::getValidateRule($compPhone));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompPhone $compPhone)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $compPhone->$method()->sync($pivots);
        }
    }
}
