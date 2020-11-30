<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ImageController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['image.index']);

		// $images = new Image;
	    $images = Image::with(Image::getRelationships());

		// (1)filltering
        $images = $this->filtering($request, $images);
        $images = $images->get();

        // (2)sort
        $images = $this->sorting($request, $images);

        // (3)paginate
        $images = $images->paginate($request->get('per_page') ?? 10);

        $resource = $images->toArray();

        $resource['lists'] = Image::getLists();

        return $this->responseSuccess(
          'IMÁGENE obtenidos!',
          $resource,
          true,
          false
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // user_can(['image.create']);

            return response()->json([
              'message' => 'Formulario para crear IMÁGENE!',
              'data' => null,
              'lists' => Image::getLists()
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // user_can(['image.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //create data
          $image = Image::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $image);
          }

        } catch (\Exception $exception) {
          DB::rollBack();
          return $this->responseError(
            '' . $exception->getMessage(),
            [
              'message' => $exception->getMessage(),
              'file' => $exception->getFile(),
              'line' => $exception->getLine(),
            ]
          );
        }
        DB::commit();

        return $this->responseSuccess(
          'IMÁGENE almacenado!',
          $image->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function show($imageId)
    {
        // user_can(['image.show']);

        $image = Image::with(Image::getRelationships())->findOrFail($imageId);

                                $image->post_ids = collect($image->posts)->pluck('id');
                
        $resource = $image->toArray();
        $resource['lists'] = Image::getLists();

        return $this->responseSuccess(
          'IMÁGENE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function edit($imageId)
    {
        // user_can(['image.edit']);

        $image = Image::with(Image::getRelationships())->findOrFail($imageId);
                                $image->post_ids = collect($image->posts)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para editar IMÁGENE!',
          [
            'model' => $image,
            'lists' => Image::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Image  $image	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($imageId)
	{
        // user_can(['image.duplicate']);

        $image = Image::with(Image::getRelationships())->findOrFail($imageId);
        $image->id = null;
                                $image->post_ids = collect($image->posts)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para duplicar IMÁGENE!',
          [
            'model' => $image,
            'lists' => Image::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function update($imageId, Request $request)
    {

        // user_can(['image.update']);

        $image = Image::findOrFail($imageId);

        $this->varidate($request, $image);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //update data
          $image->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $image);
          }


        } catch (Exception $exception) {
          DB::rollBack();
          return $this->responseError(
            '' . $exception->getMessage(),
            [
              'message' => $exception->getMessage(),
              'file' => $exception->getFile(),
              'line' => $exception->getLine(),
            ]
          );
        }
        DB::commit();

        return $this->responseSuccess(
          'IMÁGENE actualizado!',
          $image->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image     * @return \Illuminate\Http\Response
     */
    public function destroy($imageId)
    {

        // user_can(['image.destroy']);

        $image = Image::findOrFail($imageId);
        $image->delete();
        return $this->responseSuccess(
          'IMÁGENE eliminado!',
          $image->toArray(),
          false,
          false,
          203
        );
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

            $pivotIds = [];
            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    $pivotIds[] = $value['id'];
                    unset($value['id']);
                }
            }
            unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $image->$method()->sync($pivotIds);
        }
    }


// end section

}
