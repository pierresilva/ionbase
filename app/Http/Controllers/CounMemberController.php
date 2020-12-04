<?php

namespace App\Http\Controllers;

use App\Models\CounMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$counMembers = new CounMember;

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

                        $counMembers = $counMembers->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $counMembers = $counMembers->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $counMembers = $counMembers->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $counMembers = $counMembers->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $counMembers = $counMembers->sortBy($sort_column);
            }

        }else{
            $counMembers = $counMembers->sortByDesc('id');
        }



        // (3)paginate
        $counMembers = $counMembers->paginate(10);

		return view('counMembers.index', compact('counMembers'))->with( 'lists', CounMember::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('counMembers.create')->with( 'lists', CounMember::getLists() );
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
		$counMember = CounMember::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMember);
        }

        DB::commit();

		return redirect()->route('counMembers.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CounMember  $counMember     * @return \Illuminate\Http\Response
     */
    public function show(CounMember $counMember)
    {
		return view('counMembers.show', compact('counMember'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMember  $counMember     * @return \Illuminate\Http\Response
     */
    public function edit(CounMember $counMember)
    {
		return view('counMembers.edit', compact('counMember'))->with( 'lists', CounMember::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CounMember  $counMember	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CounMember $counMember)
	{
		return view('counMembers.duplicate', compact('counMember'))->with( 'lists', CounMember::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMember  $counMember     * @return \Illuminate\Http\Response
     */
    public function update(CounMember $counMember, Request $request)
    {
        $this->varidate($request, $counMember);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$counMember->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMember);
        }

        DB::commit();

		return redirect()->route('counMembers.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMember  $counMember     * @return \Illuminate\Http\Response
     */
    public function destroy(CounMember $counMember)
    {
		$counMember->delete();
		return redirect()->route('counMembers.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CounMember $counMember = null)
    {
        $request->validate(CounMember::getValidateRule($counMember));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMember $counMember)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $counMember->$method()->sync($pivots);
        }
    }
}
