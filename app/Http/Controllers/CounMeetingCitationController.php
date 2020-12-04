<?php

namespace App\Http\Controllers;

use App\Models\CounMeetingCitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMeetingCitationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$counMeetingCitations = new CounMeetingCitation;

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

                        $counMeetingCitations = $counMeetingCitations->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $counMeetingCitations = $counMeetingCitations->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $counMeetingCitations = $counMeetingCitations->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $counMeetingCitations = $counMeetingCitations->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $counMeetingCitations = $counMeetingCitations->sortBy($sort_column);
            }

        }else{
            $counMeetingCitations = $counMeetingCitations->sortByDesc('id');
        }



        // (3)paginate
        $counMeetingCitations = $counMeetingCitations->paginate(10);

		return view('counMeetingCitations.index', compact('counMeetingCitations'))->with( 'lists', CounMeetingCitation::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('counMeetingCitations.create')->with( 'lists', CounMeetingCitation::getLists() );
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
		$counMeetingCitation = CounMeetingCitation::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeetingCitation);
        }

        DB::commit();

		return redirect()->route('counMeetingCitations.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CounMeetingCitation  $counMeetingCitation     * @return \Illuminate\Http\Response
     */
    public function show(CounMeetingCitation $counMeetingCitation)
    {
		return view('counMeetingCitations.show', compact('counMeetingCitation'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMeetingCitation  $counMeetingCitation     * @return \Illuminate\Http\Response
     */
    public function edit(CounMeetingCitation $counMeetingCitation)
    {
		return view('counMeetingCitations.edit', compact('counMeetingCitation'))->with( 'lists', CounMeetingCitation::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CounMeetingCitation  $counMeetingCitation	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CounMeetingCitation $counMeetingCitation)
	{
		return view('counMeetingCitations.duplicate', compact('counMeetingCitation'))->with( 'lists', CounMeetingCitation::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMeetingCitation  $counMeetingCitation     * @return \Illuminate\Http\Response
     */
    public function update(CounMeetingCitation $counMeetingCitation, Request $request)
    {
        $this->varidate($request, $counMeetingCitation);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$counMeetingCitation->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeetingCitation);
        }

        DB::commit();

		return redirect()->route('counMeetingCitations.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMeetingCitation  $counMeetingCitation     * @return \Illuminate\Http\Response
     */
    public function destroy(CounMeetingCitation $counMeetingCitation)
    {
		$counMeetingCitation->delete();
		return redirect()->route('counMeetingCitations.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CounMeetingCitation $counMeetingCitation = null)
    {
        $request->validate(CounMeetingCitation::getValidateRule($counMeetingCitation));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeetingCitation $counMeetingCitation)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $counMeetingCitation->$method()->sync($pivots);
        }
    }
}
