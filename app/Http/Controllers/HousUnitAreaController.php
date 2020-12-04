<?php

namespace App\Http\Controllers;

use App\Models\HousUnitArea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HousUnitAreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$housUnitAreas = new HousUnitArea;

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

                        $housUnitAreas = $housUnitAreas->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $housUnitAreas = $housUnitAreas->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $housUnitAreas = $housUnitAreas->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $housUnitAreas = $housUnitAreas->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $housUnitAreas = $housUnitAreas->sortBy($sort_column);
            }

        }else{
            $housUnitAreas = $housUnitAreas->sortByDesc('id');
        }



        // (3)paginate
        $housUnitAreas = $housUnitAreas->paginate(10);

		return view('housUnitAreas.index', compact('housUnitAreas'))->with( 'lists', HousUnitArea::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('housUnitAreas.create')->with( 'lists', HousUnitArea::getLists() );
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
		$housUnitArea = HousUnitArea::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $housUnitArea);
        }

        DB::commit();

		return redirect()->route('housUnitAreas.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function show(HousUnitArea $housUnitArea)
    {
		return view('housUnitAreas.show', compact('housUnitArea'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function edit(HousUnitArea $housUnitArea)
    {
		return view('housUnitAreas.edit', compact('housUnitArea'))->with( 'lists', HousUnitArea::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\HousUnitArea  $housUnitArea	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(HousUnitArea $housUnitArea)
	{
		return view('housUnitAreas.duplicate', compact('housUnitArea'))->with( 'lists', HousUnitArea::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function update(HousUnitArea $housUnitArea, Request $request)
    {
        $this->varidate($request, $housUnitArea);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$housUnitArea->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $housUnitArea);
        }

        DB::commit();

		return redirect()->route('housUnitAreas.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function destroy(HousUnitArea $housUnitArea)
    {
		$housUnitArea->delete();
		return redirect()->route('housUnitAreas.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, HousUnitArea $housUnitArea = null)
    {
        $request->validate(HousUnitArea::getValidateRule($housUnitArea));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, HousUnitArea $housUnitArea)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $housUnitArea->$method()->sync($pivots);
        }
    }
}
