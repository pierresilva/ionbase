<?php

namespace App\Http\Controllers;

use App\Models\CorrPacket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CorrPacketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$corrPackets = new CorrPacket;

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

                        $corrPackets = $corrPackets->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $corrPackets = $corrPackets->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $corrPackets = $corrPackets->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $corrPackets = $corrPackets->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $corrPackets = $corrPackets->sortBy($sort_column);
            }

        }else{
            $corrPackets = $corrPackets->sortByDesc('id');
        }



        // (3)paginate
        $corrPackets = $corrPackets->paginate(10);

		return view('corrPackets.index', compact('corrPackets'))->with( 'lists', CorrPacket::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('corrPackets.create')->with( 'lists', CorrPacket::getLists() );
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
		$corrPacket = CorrPacket::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $corrPacket);
        }

        DB::commit();

		return redirect()->route('corrPackets.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function show(CorrPacket $corrPacket)
    {
		return view('corrPackets.show', compact('corrPacket'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function edit(CorrPacket $corrPacket)
    {
		return view('corrPackets.edit', compact('corrPacket'))->with( 'lists', CorrPacket::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\CorrPacket  $corrPacket	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(CorrPacket $corrPacket)
	{
		return view('corrPackets.duplicate', compact('corrPacket'))->with( 'lists', CorrPacket::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function update(CorrPacket $corrPacket, Request $request)
    {
        $this->varidate($request, $corrPacket);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$corrPacket->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $corrPacket);
        }

        DB::commit();

		return redirect()->route('corrPackets.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function destroy(CorrPacket $corrPacket)
    {
		$corrPacket->delete();
		return redirect()->route('corrPackets.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, CorrPacket $corrPacket = null)
    {
        $request->validate(CorrPacket::getValidateRule($corrPacket));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CorrPacket $corrPacket)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $corrPacket->$method()->sync($pivots);
        }
    }
}
