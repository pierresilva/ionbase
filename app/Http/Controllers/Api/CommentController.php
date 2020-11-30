<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['comment.index']);

		// $comments = new Comment;
	    $comments = Comment::with(Comment::getRelationships());

		// (1)filltering
        $comments = $this->filtering($request, $comments);
        $comments = $comments->get();

        // (2)sort
        $comments = $this->sorting($request, $comments);

        // (3)paginate
        $comments = $comments->paginate($request->get('per_page') ?? 10);

        $resource = $comments->toArray();

        $resource['lists'] = Comment::getLists();

        return $this->responseSuccess(
          'COMENTARIO obtenidos!',
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
        // user_can(['comment.create']);

            return response()->json([
              'message' => 'Formulario para crear COMENTARIO!',
              'data' => null,
              'lists' => Comment::getLists()
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
        // user_can(['comment.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $comment = Comment::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $comment);
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
          'COMENTARIO almacenado!',
          $comment->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment     * @return \Illuminate\Http\Response
     */
    public function show($commentId)
    {
        // user_can(['comment.show']);

        $comment = Comment::with(Comment::getRelationships())->findOrFail($commentId);

                                
        $resource = $comment->toArray();
        $resource['lists'] = Comment::getLists();

        return $this->responseSuccess(
          'COMENTARIO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment     * @return \Illuminate\Http\Response
     */
    public function edit($commentId)
    {
        // user_can(['comment.edit']);

        $comment = Comment::with(Comment::getRelationships())->findOrFail($commentId);
                                
        return $this->responseSuccess(
          'Formulario para editar COMENTARIO!',
          [
            'model' => $comment,
            'lists' => Comment::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Comment  $comment	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($commentId)
	{
        // user_can(['comment.duplicate']);

        $comment = Comment::with(Comment::getRelationships())->findOrFail($commentId);
        $comment->id = null;
                                
        return $this->responseSuccess(
          'Formulario para duplicar COMENTARIO!',
          [
            'model' => $comment,
            'lists' => Comment::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment     * @return \Illuminate\Http\Response
     */
    public function update($commentId, Request $request)
    {

        // user_can(['comment.update']);

        $comment = Comment::findOrFail($commentId);

        $this->varidate($request, $comment);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $comment->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $comment);
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
          'COMENTARIO actualizado!',
          $comment->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment     * @return \Illuminate\Http\Response
     */
    public function destroy($commentId)
    {

        // user_can(['comment.destroy']);

        $comment = Comment::findOrFail($commentId);
        $comment->delete();
        return $this->responseSuccess(
          'COMENTARIO eliminado!',
          $comment->toArray(),
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
    public function varidate(Request $request, Comment $comment = null)
    {
        $request->validate(Comment::getValidateRule($comment));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Comment $comment)
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
            $comment->$method()->sync($pivotIds);
        }
    }


// end section

}
