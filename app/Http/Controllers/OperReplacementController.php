<?php

namespace App\Http\Controllers;

use App\Models\OperReplacement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperReplacementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operReplacements = new OperReplacement;

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

                        $operReplacements = $operReplacements->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operReplacements = $operReplacements->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operReplacements = $operReplacements->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operReplacements = $operReplacements->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operReplacements = $operReplacements->sortBy($sort_column);
            }

        }else{
            $operReplacements = $operReplacements->sortByDesc('id');
        }



        // (3)paginate
        $operReplacements = $operReplacements->paginate(10);

		return view('operReplacements.index', compact('operReplacements'))->with( 'lists', OperReplacement::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operReplacements.create')->with( 'lists', OperReplacement::getLists() );
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
		$operReplacement = OperReplacement::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operReplacement);
        }

        DB::commit();

		return redirect()->route('operReplacements.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function show(OperReplacement $operReplacement)
    {
		return view('operReplacements.show', compact('operReplacement'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function edit(OperReplacement $operReplacement)
    {
		return view('operReplacements.edit', compact('operReplacement'))->with( 'lists', OperReplacement::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperReplacement  $operReplacement	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperReplacement $operReplacement)
	{
		return view('operReplacements.duplicate', compact('operReplacement'))->with( 'lists', OperReplacement::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function update(OperReplacement $operReplacement, Request $request)
    {
        $this->varidate($request, $operReplacement);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operReplacement->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operReplacement);
        }

        DB::commit();

		return redirect()->route('operReplacements.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function destroy(OperReplacement $operReplacement)
    {
		$operReplacement->delete();
		return redirect()->route('operReplacements.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperReplacement $operReplacement = null)
    {
        $request->validate(OperReplacement::getValidateRule($operReplacement));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperReplacement $operReplacement)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operReplacement->$method()->sync($pivots);
        }
    }
}
