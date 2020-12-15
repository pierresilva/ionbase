<?php

namespace App\Http\Controllers;

use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$userRoles = new UserRole;

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

                        $userRoles = $userRoles->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $userRoles = $userRoles->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $userRoles = $userRoles->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $userRoles = $userRoles->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $userRoles = $userRoles->sortBy($sort_column);
            }

        }else{
            $userRoles = $userRoles->sortByDesc('id');
        }



        // (3)paginate
        $userRoles = $userRoles->paginate(10);

		return view('userRoles.index', compact('userRoles'))->with( 'lists', UserRole::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('userRoles.create')->with( 'lists', UserRole::getLists() );
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
		$userRole = UserRole::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $userRole);
        }

        DB::commit();

		return redirect()->route('userRoles.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\UserRole  $userRole     * @return \Illuminate\Http\Response
     */
    public function show(UserRole $userRole)
    {
		return view('userRoles.show', compact('userRole'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserRole  $userRole     * @return \Illuminate\Http\Response
     */
    public function edit(UserRole $userRole)
    {
		return view('userRoles.edit', compact('userRole'))->with( 'lists', UserRole::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\UserRole  $userRole	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(UserRole $userRole)
	{
		return view('userRoles.duplicate', compact('userRole'))->with( 'lists', UserRole::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserRole  $userRole     * @return \Illuminate\Http\Response
     */
    public function update(UserRole $userRole, Request $request)
    {
        $this->varidate($request, $userRole);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$userRole->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $userRole);
        }

        DB::commit();

		return redirect()->route('userRoles.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserRole  $userRole     * @return \Illuminate\Http\Response
     */
    public function destroy(UserRole $userRole)
    {
		$userRole->delete();
		return redirect()->route('userRoles.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, UserRole $userRole = null)
    {
        $request->validate(UserRole::getValidateRule($userRole));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, UserRole $userRole)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $userRole->$method()->sync($pivots);
        }
    }
}
