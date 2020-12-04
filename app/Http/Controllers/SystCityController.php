<?php

namespace App\Http\Controllers;

use App\Models\SystCity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystCityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$systCities = new SystCity;

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

                        $systCities = $systCities->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $systCities = $systCities->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $systCities = $systCities->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $systCities = $systCities->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $systCities = $systCities->sortBy($sort_column);
            }

        }else{
            $systCities = $systCities->sortByDesc('id');
        }



        // (3)paginate
        $systCities = $systCities->paginate(10);

		return view('systCities.index', compact('systCities'))->with( 'lists', SystCity::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('systCities.create')->with( 'lists', SystCity::getLists() );
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
		$systCity = SystCity::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systCity);
        }

        DB::commit();

		return redirect()->route('systCities.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function show(SystCity $systCity)
    {
		return view('systCities.show', compact('systCity'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function edit(SystCity $systCity)
    {
		return view('systCities.edit', compact('systCity'))->with( 'lists', SystCity::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SystCity  $systCity	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SystCity $systCity)
	{
		return view('systCities.duplicate', compact('systCity'))->with( 'lists', SystCity::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function update(SystCity $systCity, Request $request)
    {
        $this->varidate($request, $systCity);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$systCity->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $systCity);
        }

        DB::commit();

		return redirect()->route('systCities.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function destroy(SystCity $systCity)
    {
		$systCity->delete();
		return redirect()->route('systCities.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SystCity $systCity = null)
    {
        $request->validate(SystCity::getValidateRule($systCity));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystCity $systCity)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $systCity->$method()->sync($pivots);
        }
    }
}
