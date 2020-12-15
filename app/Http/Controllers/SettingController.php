<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$settings = new Setting;

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

                        $settings = $settings->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $settings = $settings->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $settings = $settings->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $settings = $settings->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $settings = $settings->sortBy($sort_column);
            }

        }else{
            $settings = $settings->sortByDesc('id');
        }



        // (3)paginate
        $settings = $settings->paginate(10);

		return view('settings.index', compact('settings'))->with( 'lists', Setting::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('settings.create')->with( 'lists', Setting::getLists() );
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
		$setting = Setting::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $setting);
        }

        DB::commit();

		return redirect()->route('settings.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Setting  $setting     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
		return view('settings.show', compact('setting'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Setting  $setting     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
		return view('settings.edit', compact('setting'))->with( 'lists', Setting::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\Setting  $setting	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(Setting $setting)
	{
		return view('settings.duplicate', compact('setting'))->with( 'lists', Setting::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Setting  $setting     * @return \Illuminate\Http\Response
     */
    public function update(Setting $setting, Request $request)
    {
        $this->varidate($request, $setting);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$setting->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $setting);
        }

        DB::commit();

		return redirect()->route('settings.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting  $setting     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
		$setting->delete();
		return redirect()->route('settings.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, Setting $setting = null)
    {
        $request->validate(Setting::getValidateRule($setting));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Setting $setting)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $setting->$method()->sync($pivots);
        }
    }
}
