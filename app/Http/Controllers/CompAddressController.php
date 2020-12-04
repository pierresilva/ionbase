<?php

namespace App\Http\Controllers;

use App\Models\CompAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$compAddresses = new CompAddress;

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

                        $compAddresses = $compAddresses->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $compAddresses = $compAddresses->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $compAddresses = $compAddresses->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $compAddresses = $compAddresses->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $compAddresses = $compAddresses->sortBy($sort_column);
            }

        }else{
            $compAddresses = $compAddresses->sortByDesc('id');
        }



        // (3)paginate
        $compAddresses = $compAddresses->paginate(10);

		return view('compAddresses.index', compact('compAddresses'))->with( 'lists', CompAddress::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('compAddresses.create')->with( 'lists', CompAddress::getLists() );
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
		$compAddress = CompAddress::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compAddress);
        }

        DB::commit();

		return redirect()->route('compAddresses.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function show(CompAddress $compAddress)
    {
		return view('compAddresses.show', compact('compAddress'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function edit(CompAddress $compAddress)
    {
		return view('compAddresses.edit', compact('compAddress'))->with( 'lists', CompAddress::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CompAddress  $compAddress	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CompAddress $compAddress)
	{
		return view('compAddresses.duplicate', compact('compAddress'))->with( 'lists', CompAddress::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function update(CompAddress $compAddress, Request $request)
    {
        $this->varidate($request, $compAddress);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$compAddress->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $compAddress);
        }

        DB::commit();

		return redirect()->route('compAddresses.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function destroy(CompAddress $compAddress)
    {
		$compAddress->delete();
		return redirect()->route('compAddresses.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CompAddress $compAddress = null)
    {
        $request->validate(CompAddress::getValidateRule($compAddress));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompAddress $compAddress)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $compAddress->$method()->sync($pivots);
        }
    }
}
