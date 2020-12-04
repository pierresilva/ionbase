<?php

namespace App\Http\Controllers;

use App\Models\CounMeeting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$counMeetings = new CounMeeting;

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

                        $counMeetings = $counMeetings->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $counMeetings = $counMeetings->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $counMeetings = $counMeetings->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $counMeetings = $counMeetings->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $counMeetings = $counMeetings->sortBy($sort_column);
            }

        }else{
            $counMeetings = $counMeetings->sortByDesc('id');
        }



        // (3)paginate
        $counMeetings = $counMeetings->paginate(10);

		return view('counMeetings.index', compact('counMeetings'))->with( 'lists', CounMeeting::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('counMeetings.create')->with( 'lists', CounMeeting::getLists() );
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
		$counMeeting = CounMeeting::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeeting);
        }

        DB::commit();

		return redirect()->route('counMeetings.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function show(CounMeeting $counMeeting)
    {
		return view('counMeetings.show', compact('counMeeting'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function edit(CounMeeting $counMeeting)
    {
		return view('counMeetings.edit', compact('counMeeting'))->with( 'lists', CounMeeting::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CounMeeting  $counMeeting	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CounMeeting $counMeeting)
	{
		return view('counMeetings.duplicate', compact('counMeeting'))->with( 'lists', CounMeeting::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function update(CounMeeting $counMeeting, Request $request)
    {
        $this->varidate($request, $counMeeting);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$counMeeting->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeeting);
        }

        DB::commit();

		return redirect()->route('counMeetings.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function destroy(CounMeeting $counMeeting)
    {
		$counMeeting->delete();
		return redirect()->route('counMeetings.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CounMeeting $counMeeting = null)
    {
        $request->validate(CounMeeting::getValidateRule($counMeeting));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeeting $counMeeting)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $counMeeting->$method()->sync($pivots);
        }
    }
}
