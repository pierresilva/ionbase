<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TagController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['tag.index']);

		// $tags = new Tag;
	    $tags = Tag::with(Tag::getRelationships());

		// (1)filltering
        $tags = $this->filtering($request, $tags);
        $tags = $tags->get();

        // (2)sort
        $tags = $this->sorting($request, $tags);

        // (3)paginate
        $tags = $tags->paginate($request->get('per_page') ?? 10);

        $resource = $tags->toArray();

        $resource['lists'] = Tag::getLists();

        return $this->responseSuccess(
          'ETIQUETA obtenidos!',
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
        // user_can(['tag.create']);

            return response()->json([
              'message' => 'Formulario para crear ETIQUETA!',
              'data' => null,
              'lists' => Tag::getLists()
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
        // user_can(['tag.store']);

        $this->varidate($request);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //create data
          $tag = Tag::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $tag);
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
          'ETIQUETA almacenado!',
          $tag->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tag  $tag     * @return \Illuminate\Http\Response
     */
    public function show($tagId)
    {
        // user_can(['tag.show']);

        $tag = Tag::with(Tag::getRelationships())->findOrFail($tagId);

                                $tag->post_ids = collect($tag->posts)->pluck('id');
                
        $resource = $tag->toArray();
        $resource['lists'] = Tag::getLists();

        return $this->responseSuccess(
          'ETIQUETA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tag  $tag     * @return \Illuminate\Http\Response
     */
    public function edit($tagId)
    {
        // user_can(['tag.edit']);

        $tag = Tag::with(Tag::getRelationships())->findOrFail($tagId);
                                $tag->post_ids = collect($tag->posts)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para editar ETIQUETA!',
          [
            'model' => $tag,
            'lists' => Tag::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Tag  $tag	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($tagId)
	{
        // user_can(['tag.duplicate']);

        $tag = Tag::with(Tag::getRelationships())->findOrFail($tagId);
        $tag->id = null;
                                $tag->post_ids = collect($tag->posts)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para duplicar ETIQUETA!',
          [
            'model' => $tag,
            'lists' => Tag::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tag  $tag     * @return \Illuminate\Http\Response
     */
    public function update($tagId, Request $request)
    {

        // user_can(['tag.update']);

        $tag = Tag::findOrFail($tagId);

        $this->varidate($request, $tag);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //update data
          $tag->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $tag);
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
          'ETIQUETA actualizado!',
          $tag->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tag  $tag     * @return \Illuminate\Http\Response
     */
    public function destroy($tagId)
    {

        // user_can(['tag.destroy']);

        $tag = Tag::findOrFail($tagId);
        $tag->delete();
        return $this->responseSuccess(
          'ETIQUETA eliminado!',
          $tag->toArray(),
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
    public function varidate(Request $request, Tag $tag = null)
    {
        $request->validate(Tag::getValidateRule($tag));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Tag $tag)
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
            $tag->$method()->sync($pivotIds);
        }
    }


// end section

}
