<?php

namespace App\Http\Controllers;

use App\Models\SystParameter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystParameterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$systParameters = new SystParameter;

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

                        $systParameters = $systParameters->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $systParameters = $systParameters->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $systParameters = $systParameters->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $systParameters = $systParameters->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $systParameters = $systParameters->sortBy($sort_column);
            }

        }else{
            $systParameters = $systParameters->sortByDesc('id');
        }



        // (3)paginate
        $systParameters = $systParameters->paginate(10);

		return view('systParameters.index', compact('systParameters'))->with( 'lists', SystParameter::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('systParameters.create')->with( 'lists', SystParameter::getLists() );
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
		$systParameter = SystParameter::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systParameter);
        }

        DB::commit();

		return redirect()->route('systParameters.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function show(SystParameter $systParameter)
    {
		return view('systParameters.show', compact('systParameter'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function edit(SystParameter $systParameter)
    {
		return view('systParameters.edit', compact('systParameter'))->with( 'lists', SystParameter::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SystParameter  $systParameter	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SystParameter $systParameter)
	{
		return view('systParameters.duplicate', compact('systParameter'))->with( 'lists', SystParameter::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function update(SystParameter $systParameter, Request $request)
    {
        $this->varidate($request, $systParameter);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$systParameter->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systParameter);
        }

        DB::commit();

		return redirect()->route('systParameters.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function destroy(SystParameter $systParameter)
    {
		$systParameter->delete();
		return redirect()->route('systParameters.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SystParameter $systParameter = null)
    {
        $request->validate(SystParameter::getValidateRule($systParameter));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystParameter $systParameter)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $systParameter->$method()->sync($pivots);
        }
    }
}
