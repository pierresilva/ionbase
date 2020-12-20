<?php

namespace App\Http\Controllers;

use App\Models\OperReason;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperReasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operReasons = new OperReason;

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

                        $operReasons = $operReasons->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operReasons = $operReasons->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operReasons = $operReasons->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operReasons = $operReasons->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operReasons = $operReasons->sortBy($sort_column);
            }

        }else{
            $operReasons = $operReasons->sortByDesc('id');
        }



        // (3)paginate
        $operReasons = $operReasons->paginate(10);

		return view('operReasons.index', compact('operReasons'))->with( 'lists', OperReason::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operReasons.create')->with( 'lists', OperReason::getLists() );
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
		$operReason = OperReason::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operReason);
        }

        DB::commit();

		return redirect()->route('operReasons.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function show(OperReason $operReason)
    {
		return view('operReasons.show', compact('operReason'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function edit(OperReason $operReason)
    {
		return view('operReasons.edit', compact('operReason'))->with( 'lists', OperReason::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperReason  $operReason	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperReason $operReason)
	{
		return view('operReasons.duplicate', compact('operReason'))->with( 'lists', OperReason::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function update(OperReason $operReason, Request $request)
    {
        $this->varidate($request, $operReason);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operReason->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operReason);
        }

        DB::commit();

		return redirect()->route('operReasons.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function destroy(OperReason $operReason)
    {
		$operReason->delete();
		return redirect()->route('operReasons.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperReason $operReason = null)
    {
        $request->validate(OperReason::getValidateRule($operReason));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperReason $operReason)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operReason->$method()->sync($pivots);
        }
    }
}
