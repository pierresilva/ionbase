<?php

namespace App\Http\Controllers;

use App\Models\SystRegion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystRegionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$systRegions = new SystRegion;

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

                        $systRegions = $systRegions->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $systRegions = $systRegions->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $systRegions = $systRegions->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $systRegions = $systRegions->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $systRegions = $systRegions->sortBy($sort_column);
            }

        }else{
            $systRegions = $systRegions->sortByDesc('id');
        }



        // (3)paginate
        $systRegions = $systRegions->paginate(10);

		return view('systRegions.index', compact('systRegions'))->with( 'lists', SystRegion::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('systRegions.create')->with( 'lists', SystRegion::getLists() );
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
		$systRegion = SystRegion::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systRegion);
        }

        DB::commit();

		return redirect()->route('systRegions.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function show(SystRegion $systRegion)
    {
		return view('systRegions.show', compact('systRegion'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function edit(SystRegion $systRegion)
    {
		return view('systRegions.edit', compact('systRegion'))->with( 'lists', SystRegion::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SystRegion  $systRegion	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SystRegion $systRegion)
	{
		return view('systRegions.duplicate', compact('systRegion'))->with( 'lists', SystRegion::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function update(SystRegion $systRegion, Request $request)
    {
        $this->varidate($request, $systRegion);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$systRegion->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systRegion);
        }

        DB::commit();

		return redirect()->route('systRegions.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function destroy(SystRegion $systRegion)
    {
		$systRegion->delete();
		return redirect()->route('systRegions.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SystRegion $systRegion = null)
    {
        $request->validate(SystRegion::getValidateRule($systRegion));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystRegion $systRegion)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $systRegion->$method()->sync($pivots);
        }
    }
}
