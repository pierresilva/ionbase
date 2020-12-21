<?php

namespace App\Http\Controllers;

use App\Models\OperMachine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperMachineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operMachines = new OperMachine;

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

                        $operMachines = $operMachines->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operMachines = $operMachines->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operMachines = $operMachines->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operMachines = $operMachines->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operMachines = $operMachines->sortBy($sort_column);
            }

        }else{
            $operMachines = $operMachines->sortByDesc('id');
        }



        // (3)paginate
        $operMachines = $operMachines->paginate(10);

		return view('operMachines.index', compact('operMachines'))->with( 'lists', OperMachine::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operMachines.create')->with( 'lists', OperMachine::getLists() );
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
		$operMachine = OperMachine::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operMachine);
        }

        DB::commit();

		return redirect()->route('operMachines.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperMachine  $operMachine     * @return \Illuminate\Http\Response
     */
    public function show(OperMachine $operMachine)
    {
		return view('operMachines.show', compact('operMachine'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperMachine  $operMachine     * @return \Illuminate\Http\Response
     */
    public function edit(OperMachine $operMachine)
    {
		return view('operMachines.edit', compact('operMachine'))->with( 'lists', OperMachine::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperMachine  $operMachine	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperMachine $operMachine)
	{
		return view('operMachines.duplicate', compact('operMachine'))->with( 'lists', OperMachine::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperMachine  $operMachine     * @return \Illuminate\Http\Response
     */
    public function update(OperMachine $operMachine, Request $request)
    {
        $this->varidate($request, $operMachine);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operMachine->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operMachine);
        }

        DB::commit();

		return redirect()->route('operMachines.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperMachine  $operMachine     * @return \Illuminate\Http\Response
     */
    public function destroy(OperMachine $operMachine)
    {
		$operMachine->delete();
		return redirect()->route('operMachines.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperMachine $operMachine = null)
    {
        $request->validate(OperMachine::getValidateRule($operMachine));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperMachine $operMachine)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operMachine->$method()->sync($pivots);
        }
    }
}