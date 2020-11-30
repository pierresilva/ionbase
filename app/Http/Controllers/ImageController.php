<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$images = new Image;

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

                        $images = $images->whereHas($column_name, function($q) use($related_column_name, $operator, $value){
    						$q->where( $related_column_name, $operator, $value );
                        });

                    }else{
                        $images = $images->where( $column_name, $operator, $value );
                    }
                }
            }
        }
        $images = $images->get();



        // (2)sort
        $q_s = $request->input('q.s');
        if($q_s){

            // sort dir and sort column
            if( substr( $q_s,-5,5 ) === '_desc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-5 );
                $images = $images->sortByDesc($sort_column);
            }elseif( substr( $q_s,-4,4 ) === '_asc' ){
                $sort_column = substr( $q_s, 0, strlen($q_s)-4 );
                $images = $images->sortBy($sort_column);
            }

        }else{
            $images = $images->sortByDesc('id');
        }



        // (3)paginate
        $images = $images->paginate(10);

		return view('images.index', compact('images'))->with( 'lists', Image::getLists());
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('images.create')->with( 'lists', Image::getLists() );
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
		$image = Image::create( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $image);
        }

        DB::commit();

		return redirect()->route('images.index')->with('message', 'Item created successfully.');
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
		return view('images.show', compact('image'));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
		return view('images.edit', compact('image'))->with( 'lists', Image::getLists() );
    }



	/**
	 * Show the form for duplicatting the specified resource.
	 *
	 * @param \App\Image  $image	 * @return \Illuminate\Http\Response
	 */
	public function duplicate(Image $image)
	{
		return view('images.duplicate', compact('image'))->with( 'lists', Image::getLists() );
	}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function update(Image $image, Request $request)
    {
        $this->varidate($request, $image);

        $input = $request->input('model');

        DB::beginTransaction();


		//update data
		$image->update( $input );

        //sync(attach/detach)
        if($request->input('pivots')){
            $this->sync($request->input('pivots'), $image);
        }

        DB::commit();

		return redirect()->route('images.index')->with('message', 'Item updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
		$image->delete();
		return redirect()->route('images.index')->with('message', 'Item deleted successfully.');
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, Image $image = null)
    {
        $request->validate(Image::getValidateRule($image));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Image $image)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    unset($value['id']);
                }
            }unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $image->$method()->sync($pivots);
        }
    }
}
