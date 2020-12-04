<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$userProfiles = new UserProfile;

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

                        $userProfiles = $userProfiles->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $userProfiles = $userProfiles->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $userProfiles = $userProfiles->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $userProfiles = $userProfiles->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $userProfiles = $userProfiles->sortBy($sort_column);
            }

        }else{
            $userProfiles = $userProfiles->sortByDesc('id');
        }



        // (3)paginate
        $userProfiles = $userProfiles->paginate(10);

		return view('userProfiles.index', compact('userProfiles'))->with( 'lists', UserProfile::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('userProfiles.create')->with( 'lists', UserProfile::getLists() );
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
		$userProfile = UserProfile::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $userProfile);
        }

        DB::commit();

		return redirect()->route('userProfiles.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\UserProfile  $userProfile     * @return \Illuminate\Http\Response
     */
    public function show(UserProfile $userProfile)
    {
		return view('userProfiles.show', compact('userProfile'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserProfile  $userProfile     * @return \Illuminate\Http\Response
     */
    public function edit(UserProfile $userProfile)
    {
		return view('userProfiles.edit', compact('userProfile'))->with( 'lists', UserProfile::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\UserProfile  $userProfile	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(UserProfile $userProfile)
	{
		return view('userProfiles.duplicate', compact('userProfile'))->with( 'lists', UserProfile::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserProfile  $userProfile     * @return \Illuminate\Http\Response
     */
    public function update(UserProfile $userProfile, Request $request)
    {
        $this->varidate($request, $userProfile);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$userProfile->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $userProfile);
        }

        DB::commit();

		return redirect()->route('userProfiles.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserProfile  $userProfile     * @return \Illuminate\Http\Response
     */
    public function destroy(UserProfile $userProfile)
    {
		$userProfile->delete();
		return redirect()->route('userProfiles.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, UserProfile $userProfile = null)
    {
        $request->validate(UserProfile::getValidateRule($userProfile));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, UserProfile $userProfile)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $userProfile->$method()->sync($pivots);
        }
    }
}
