<?php

namespace App\Http\Controllers;

use App\Models\OperPreventiveMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperPreventiveMaintenanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operPreventiveMaintenances = new OperPreventiveMaintenance;

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

                        $operPreventiveMaintenances = $operPreventiveMaintenances->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operPreventiveMaintenances = $operPreventiveMaintenances->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operPreventiveMaintenances = $operPreventiveMaintenances->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operPreventiveMaintenances = $operPreventiveMaintenances->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operPreventiveMaintenances = $operPreventiveMaintenances->sortBy($sort_column);
            }

        }else{
            $operPreventiveMaintenances = $operPreventiveMaintenances->sortByDesc('id');
        }



        // (3)paginate
        $operPreventiveMaintenances = $operPreventiveMaintenances->paginate(10);

		return view('operPreventiveMaintenances.index', compact('operPreventiveMaintenances'))->with( 'lists', OperPreventiveMaintenance::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operPreventiveMaintenances.create')->with( 'lists', OperPreventiveMaintenance::getLists() );
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
		$operPreventiveMaintenance = OperPreventiveMaintenance::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operPreventiveMaintenance);
        }

        DB::commit();

		return redirect()->route('operPreventiveMaintenances.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function show(OperPreventiveMaintenance $operPreventiveMaintenance)
    {
		return view('operPreventiveMaintenances.show', compact('operPreventiveMaintenance'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function edit(OperPreventiveMaintenance $operPreventiveMaintenance)
    {
		return view('operPreventiveMaintenances.edit', compact('operPreventiveMaintenance'))->with( 'lists', OperPreventiveMaintenance::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperPreventiveMaintenance  $operPreventiveMaintenance	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperPreventiveMaintenance $operPreventiveMaintenance)
	{
		return view('operPreventiveMaintenances.duplicate', compact('operPreventiveMaintenance'))->with( 'lists', OperPreventiveMaintenance::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function update(OperPreventiveMaintenance $operPreventiveMaintenance, Request $request)
    {
        $this->varidate($request, $operPreventiveMaintenance);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operPreventiveMaintenance->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operPreventiveMaintenance);
        }

        DB::commit();

		return redirect()->route('operPreventiveMaintenances.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function destroy(OperPreventiveMaintenance $operPreventiveMaintenance)
    {
		$operPreventiveMaintenance->delete();
		return redirect()->route('operPreventiveMaintenances.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperPreventiveMaintenance $operPreventiveMaintenance = null)
    {
        $request->validate(OperPreventiveMaintenance::getValidateRule($operPreventiveMaintenance));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperPreventiveMaintenance $operPreventiveMaintenance)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operPreventiveMaintenance->$method()->sync($pivots);
        }
    }
}
