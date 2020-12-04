<?php

namespace App\Http\Controllers;

use App\Models\CounMeetingAgenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMeetingAgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$counMeetingAgendas = new CounMeetingAgenda;

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

                        $counMeetingAgendas = $counMeetingAgendas->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $counMeetingAgendas = $counMeetingAgendas->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $counMeetingAgendas = $counMeetingAgendas->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $counMeetingAgendas = $counMeetingAgendas->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $counMeetingAgendas = $counMeetingAgendas->sortBy($sort_column);
            }

        }else{
            $counMeetingAgendas = $counMeetingAgendas->sortByDesc('id');
        }



        // (3)paginate
        $counMeetingAgendas = $counMeetingAgendas->paginate(10);

		return view('counMeetingAgendas.index', compact('counMeetingAgendas'))->with( 'lists', CounMeetingAgenda::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('counMeetingAgendas.create')->with( 'lists', CounMeetingAgenda::getLists() );
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
		$counMeetingAgenda = CounMeetingAgenda::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeetingAgenda);
        }

        DB::commit();

		return redirect()->route('counMeetingAgendas.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function show(CounMeetingAgenda $counMeetingAgenda)
    {
		return view('counMeetingAgendas.show', compact('counMeetingAgenda'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function edit(CounMeetingAgenda $counMeetingAgenda)
    {
		return view('counMeetingAgendas.edit', compact('counMeetingAgenda'))->with( 'lists', CounMeetingAgenda::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CounMeetingAgenda  $counMeetingAgenda	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CounMeetingAgenda $counMeetingAgenda)
	{
		return view('counMeetingAgendas.duplicate', compact('counMeetingAgenda'))->with( 'lists', CounMeetingAgenda::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function update(CounMeetingAgenda $counMeetingAgenda, Request $request)
    {
        $this->varidate($request, $counMeetingAgenda);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$counMeetingAgenda->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $counMeetingAgenda);
        }

        DB::commit();

		return redirect()->route('counMeetingAgendas.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function destroy(CounMeetingAgenda $counMeetingAgenda)
    {
		$counMeetingAgenda->delete();
		return redirect()->route('counMeetingAgendas.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CounMeetingAgenda $counMeetingAgenda = null)
    {
        $request->validate(CounMeetingAgenda::getValidateRule($counMeetingAgenda));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeetingAgenda $counMeetingAgenda)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $counMeetingAgenda->$method()->sync($pivots);
        }
    }
}
