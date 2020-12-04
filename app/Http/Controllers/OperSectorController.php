<?php

namespace App\Http\Controllers;

use App\Models\OperSector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperSectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$operSectors = new OperSector;

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

                        $operSectors = $operSectors->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $operSectors = $operSectors->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $operSectors = $operSectors->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $operSectors = $operSectors->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $operSectors = $operSectors->sortBy($sort_column);
            }

        }else{
            $operSectors = $operSectors->sortByDesc('id');
        }



        // (3)paginate
        $operSectors = $operSectors->paginate(10);

		return view('operSectors.index', compact('operSectors'))->with( 'lists', OperSector::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('operSectors.create')->with( 'lists', OperSector::getLists() );
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
		$operSector = OperSector::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operSector);
        }

        DB::commit();

		return redirect()->route('operSectors.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function show(OperSector $operSector)
    {
		return view('operSectors.show', compact('operSector'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function edit(OperSector $operSector)
    {
		return view('operSectors.edit', compact('operSector'))->with( 'lists', OperSector::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\OperSector  $operSector	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(OperSector $operSector)
	{
		return view('operSectors.duplicate', compact('operSector'))->with( 'lists', OperSector::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function update(OperSector $operSector, Request $request)
    {
        $this->varidate($request, $operSector);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$operSector->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $operSector);
        }

        DB::commit();

		return redirect()->route('operSectors.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function destroy(OperSector $operSector)
    {
		$operSector->delete();
		return redirect()->route('operSectors.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, OperSector $operSector = null)
    {
        $request->validate(OperSector::getValidateRule($operSector));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperSector $operSector)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $operSector->$method()->sync($pivots);
        }
    }
}
