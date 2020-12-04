<?php

namespace App\Http\Controllers;

use App\Models\OperSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operSchedules = new OperSchedule;

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

                        $operSchedules = $operSchedules->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operSchedules = $operSchedules->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operSchedules = $operSchedules->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operSchedules = $operSchedules->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operSchedules = $operSchedules->sortBy($sort_column);
            }

        }else{
            $operSchedules = $operSchedules->sortByDesc('id');
        }



        // (3)paginate
        $operSchedules = $operSchedules->paginate(10);

		return view('operSchedules.index', compact('operSchedules'))->with( 'lists', OperSchedule::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operSchedules.create')->with( 'lists', OperSchedule::getLists() );
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
		$operSchedule = OperSchedule::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operSchedule);
        }

        DB::commit();

		return redirect()->route('operSchedules.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function show(OperSchedule $operSchedule)
    {
		return view('operSchedules.show', compact('operSchedule'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function edit(OperSchedule $operSchedule)
    {
		return view('operSchedules.edit', compact('operSchedule'))->with( 'lists', OperSchedule::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperSchedule  $operSchedule	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperSchedule $operSchedule)
	{
		return view('operSchedules.duplicate', compact('operSchedule'))->with( 'lists', OperSchedule::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function update(OperSchedule $operSchedule, Request $request)
    {
        $this->varidate($request, $operSchedule);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operSchedule->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operSchedule);
        }

        DB::commit();

		return redirect()->route('operSchedules.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function destroy(OperSchedule $operSchedule)
    {
		$operSchedule->delete();
		return redirect()->route('operSchedules.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperSchedule $operSchedule = null)
    {
        $request->validate(OperSchedule::getValidateRule($operSchedule));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperSchedule $operSchedule)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operSchedule->$method()->sync($pivots);
        }
    }
}
