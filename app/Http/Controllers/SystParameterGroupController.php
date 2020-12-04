<?php

namespace App\Http\Controllers;

use App\Models\SystParameterGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystParameterGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$systParameterGroups = new SystParameterGroup;

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

                        $systParameterGroups = $systParameterGroups->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $systParameterGroups = $systParameterGroups->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $systParameterGroups = $systParameterGroups->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $systParameterGroups = $systParameterGroups->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $systParameterGroups = $systParameterGroups->sortBy($sort_column);
            }

        }else{
            $systParameterGroups = $systParameterGroups->sortByDesc('id');
        }



        // (3)paginate
        $systParameterGroups = $systParameterGroups->paginate(10);

		return view('systParameterGroups.index', compact('systParameterGroups'))->with( 'lists', SystParameterGroup::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('systParameterGroups.create')->with( 'lists', SystParameterGroup::getLists() );
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
		$systParameterGroup = SystParameterGroup::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systParameterGroup);
        }

        DB::commit();

		return redirect()->route('systParameterGroups.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function show(SystParameterGroup $systParameterGroup)
    {
		return view('systParameterGroups.show', compact('systParameterGroup'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function edit(SystParameterGroup $systParameterGroup)
    {
		return view('systParameterGroups.edit', compact('systParameterGroup'))->with( 'lists', SystParameterGroup::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SystParameterGroup  $systParameterGroup	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SystParameterGroup $systParameterGroup)
	{
		return view('systParameterGroups.duplicate', compact('systParameterGroup'))->with( 'lists', SystParameterGroup::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function update(SystParameterGroup $systParameterGroup, Request $request)
    {
        $this->varidate($request, $systParameterGroup);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$systParameterGroup->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systParameterGroup);
        }

        DB::commit();

		return redirect()->route('systParameterGroups.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function destroy(SystParameterGroup $systParameterGroup)
    {
		$systParameterGroup->delete();
		return redirect()->route('systParameterGroups.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SystParameterGroup $systParameterGroup = null)
    {
        $request->validate(SystParameterGroup::getValidateRule($systParameterGroup));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystParameterGroup $systParameterGroup)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $systParameterGroup->$method()->sync($pivots);
        }
    }
}
