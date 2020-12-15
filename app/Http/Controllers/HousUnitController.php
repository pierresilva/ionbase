<?php

namespace App\Http\Controllers;

use App\Models\HousUnit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HousUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$housUnits = new HousUnit;

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

                        $housUnits = $housUnits->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $housUnits = $housUnits->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $housUnits = $housUnits->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $housUnits = $housUnits->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $housUnits = $housUnits->sortBy($sort_column);
            }

        }else{
            $housUnits = $housUnits->sortByDesc('id');
        }



        // (3)paginate
        $housUnits = $housUnits->paginate(10);

		return view('housUnits.index', compact('housUnits'))->with( 'lists', HousUnit::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('housUnits.create')->with( 'lists', HousUnit::getLists() );
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
		$housUnit = HousUnit::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $housUnit);
        }

        DB::commit();

		return redirect()->route('housUnits.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function show(HousUnit $housUnit)
    {
		return view('housUnits.show', compact('housUnit'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function edit(HousUnit $housUnit)
    {
		return view('housUnits.edit', compact('housUnit'))->with( 'lists', HousUnit::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\HousUnit  $housUnit	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(HousUnit $housUnit)
	{
		return view('housUnits.duplicate', compact('housUnit'))->with( 'lists', HousUnit::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function update(HousUnit $housUnit, Request $request)
    {
        $this->varidate($request, $housUnit);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$housUnit->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $housUnit);
        }

        DB::commit();

		return redirect()->route('housUnits.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function destroy(HousUnit $housUnit)
    {
		$housUnit->delete();
		return redirect()->route('housUnits.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, HousUnit $housUnit = null)
    {
        $request->validate(HousUnit::getValidateRule($housUnit));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, HousUnit $housUnit)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $housUnit->$method()->sync($pivots);
        }
    }
}
