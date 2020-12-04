<?php

namespace App\Http\Controllers;

use App\Models\CompResponsability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompResponsabilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$compResponsabilities = new CompResponsability;

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

                        $compResponsabilities = $compResponsabilities->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $compResponsabilities = $compResponsabilities->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $compResponsabilities = $compResponsabilities->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $compResponsabilities = $compResponsabilities->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $compResponsabilities = $compResponsabilities->sortBy($sort_column);
            }

        }else{
            $compResponsabilities = $compResponsabilities->sortByDesc('id');
        }



        // (3)paginate
        $compResponsabilities = $compResponsabilities->paginate(10);

		return view('compResponsabilities.index', compact('compResponsabilities'))->with( 'lists', CompResponsability::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('compResponsabilities.create')->with( 'lists', CompResponsability::getLists() );
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
		$compResponsability = CompResponsability::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compResponsability);
        }

        DB::commit();

		return redirect()->route('compResponsabilities.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function show(CompResponsability $compResponsability)
    {
		return view('compResponsabilities.show', compact('compResponsability'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function edit(CompResponsability $compResponsability)
    {
		return view('compResponsabilities.edit', compact('compResponsability'))->with( 'lists', CompResponsability::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CompResponsability  $compResponsability	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CompResponsability $compResponsability)
	{
		return view('compResponsabilities.duplicate', compact('compResponsability'))->with( 'lists', CompResponsability::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function update(CompResponsability $compResponsability, Request $request)
    {
        $this->varidate($request, $compResponsability);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$compResponsability->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compResponsability);
        }

        DB::commit();

		return redirect()->route('compResponsabilities.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function destroy(CompResponsability $compResponsability)
    {
		$compResponsability->delete();
		return redirect()->route('compResponsabilities.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CompResponsability $compResponsability = null)
    {
        $request->validate(CompResponsability::getValidateRule($compResponsability));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompResponsability $compResponsability)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $compResponsability->$method()->sync($pivots);
        }
    }
}
