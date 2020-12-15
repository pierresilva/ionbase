<?php

namespace App\Http\Controllers;

use App\Models\SettingGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SettingGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$settingGroups = new SettingGroup;

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

                        $settingGroups = $settingGroups->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $settingGroups = $settingGroups->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $settingGroups = $settingGroups->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $settingGroups = $settingGroups->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $settingGroups = $settingGroups->sortBy($sort_column);
            }

        }else{
            $settingGroups = $settingGroups->sortByDesc('id');
        }



        // (3)paginate
        $settingGroups = $settingGroups->paginate(10);

		return view('settingGroups.index', compact('settingGroups'))->with( 'lists', SettingGroup::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('settingGroups.create')->with( 'lists', SettingGroup::getLists() );
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
		$settingGroup = SettingGroup::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $settingGroup);
        }

        DB::commit();

		return redirect()->route('settingGroups.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SettingGroup  $settingGroup     * @return \Illuminate\Http\Response
     */
    public function show(SettingGroup $settingGroup)
    {
		return view('settingGroups.show', compact('settingGroup'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SettingGroup  $settingGroup     * @return \Illuminate\Http\Response
     */
    public function edit(SettingGroup $settingGroup)
    {
		return view('settingGroups.edit', compact('settingGroup'))->with( 'lists', SettingGroup::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\SettingGroup  $settingGroup	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(SettingGroup $settingGroup)
	{
		return view('settingGroups.duplicate', compact('settingGroup'))->with( 'lists', SettingGroup::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SettingGroup  $settingGroup     * @return \Illuminate\Http\Response
     */
    public function update(SettingGroup $settingGroup, Request $request)
    {
        $this->varidate($request, $settingGroup);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$settingGroup->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $settingGroup);
        }

        DB::commit();

		return redirect()->route('settingGroups.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SettingGroup  $settingGroup     * @return \Illuminate\Http\Response
     */
    public function destroy(SettingGroup $settingGroup)
    {
		$settingGroup->delete();
		return redirect()->route('settingGroups.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, SettingGroup $settingGroup = null)
    {
        $request->validate(SettingGroup::getValidateRule($settingGroup));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SettingGroup $settingGroup)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $settingGroup->$method()->sync($pivots);
        }
    }
}
