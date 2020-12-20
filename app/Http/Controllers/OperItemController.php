<?php

namespace App\Http\Controllers;

use App\Models\OperItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operItems = new OperItem;

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

                        $operItems = $operItems->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operItems = $operItems->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operItems = $operItems->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operItems = $operItems->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operItems = $operItems->sortBy($sort_column);
            }

        }else{
            $operItems = $operItems->sortByDesc('id');
        }



        // (3)paginate
        $operItems = $operItems->paginate(10);

		return view('operItems.index', compact('operItems'))->with( 'lists', OperItem::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operItems.create')->with( 'lists', OperItem::getLists() );
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
		$operItem = OperItem::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operItem);
        }

        DB::commit();

		return redirect()->route('operItems.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function show(OperItem $operItem)
    {
		return view('operItems.show', compact('operItem'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function edit(OperItem $operItem)
    {
		return view('operItems.edit', compact('operItem'))->with( 'lists', OperItem::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperItem  $operItem	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperItem $operItem)
	{
		return view('operItems.duplicate', compact('operItem'))->with( 'lists', OperItem::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function update(OperItem $operItem, Request $request)
    {
        $this->varidate($request, $operItem);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operItem->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operItem);
        }

        DB::commit();

		return redirect()->route('operItems.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function destroy(OperItem $operItem)
    {
		$operItem->delete();
		return redirect()->route('operItems.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperItem $operItem = null)
    {
        $request->validate(OperItem::getValidateRule($operItem));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperItem $operItem)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operItem->$method()->sync($pivots);
        }
    }
}
