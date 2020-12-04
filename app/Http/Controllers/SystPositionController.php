<?php

namespace App\Http\Controllers;

use App\Models\SystPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystPositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$systPositions = new SystPosition;

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

                        $systPositions = $systPositions->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $systPositions = $systPositions->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $systPositions = $systPositions->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $systPositions = $systPositions->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $systPositions = $systPositions->sortBy($sort_column);
            }

        }else{
            $systPositions = $systPositions->sortByDesc('id');
        }



        // (3)paginate
        $systPositions = $systPositions->paginate(10);

		return view('systPositions.index', compact('systPositions'))->with( 'lists', SystPosition::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('systPositions.create')->with( 'lists', SystPosition::getLists() );
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
		$systPosition = SystPosition::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systPosition);
        }

        DB::commit();

		return redirect()->route('systPositions.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function show(SystPosition $systPosition)
    {
		return view('systPositions.show', compact('systPosition'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function edit(SystPosition $systPosition)
    {
		return view('systPositions.edit', compact('systPosition'))->with( 'lists', SystPosition::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SystPosition  $systPosition	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SystPosition $systPosition)
	{
		return view('systPositions.duplicate', compact('systPosition'))->with( 'lists', SystPosition::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function update(SystPosition $systPosition, Request $request)
    {
        $this->varidate($request, $systPosition);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$systPosition->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systPosition);
        }

        DB::commit();

		return redirect()->route('systPositions.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function destroy(SystPosition $systPosition)
    {
		$systPosition->delete();
		return redirect()->route('systPositions.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SystPosition $systPosition = null)
    {
        $request->validate(SystPosition::getValidateRule($systPosition));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystPosition $systPosition)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $systPosition->$method()->sync($pivots);
        }
    }
}
