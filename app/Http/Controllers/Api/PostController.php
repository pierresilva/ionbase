<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['post.index']);

		// $posts = new Post;
	    $posts = Post::with(Post::getRelationships());

		// (1)filltering
        $posts = $this->filtering($request, $posts);
        $posts = $posts->get();

        // (2)sort
        $posts = $this->sorting($request, $posts);

        // (3)paginate
        $posts = $posts->paginate($request->get('per_page') ?? 10);

        $resource = $posts->toArray();

        $resource['lists'] = Post::getLists();

        return $this->responseSuccess(
          'ENTRADA obtenidos!',
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
        // user_can(['post.create']);

            return response()->json([
              'message' => 'Formulario para crear ENTRADA!',
              'data' => null,
              'lists' => Post::getLists()
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
        // user_can(['post.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $post = Post::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $post);
          }
            if (isset($input['comments']) && count($input['comments'])) {
                foreach ($input['comments'] as $comment) {
                  \App\Models\Comment::find($comment['id'])->update(['post_id' => $post->id]);
                }
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
          'ENTRADA almacenado!',
          $post->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post     * @return \Illuminate\Http\Response
     */
    public function show($postId)
    {
        // user_can(['post.show']);

        $post = Post::with(Post::getRelationships())->findOrFail($postId);

                                                                                $post->tag_ids = collect($post->tags)->pluck('id');
                                $post->comment_ids = collect($post->comments)->pluck('id');
                                                $post->image_ids = collect($post->images)->pluck('id');
                
        $resource = $post->toArray();
        $resource['lists'] = Post::getLists();

        return $this->responseSuccess(
          'ENTRADA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post     * @return \Illuminate\Http\Response
     */
    public function edit($postId)
    {
        // user_can(['post.edit']);

        $post = Post::with(Post::getRelationships())->findOrFail($postId);
                                                                                $post->tag_ids = collect($post->tags)->pluck('id');
                                $post->comment_ids = collect($post->comments)->pluck('id');
                                                $post->image_ids = collect($post->images)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para editar ENTRADA!',
          [
            'model' => $post,
            'lists' => Post::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Post  $post	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($postId)
	{
        // user_can(['post.duplicate']);

        $post = Post::with(Post::getRelationships())->findOrFail($postId);
        $post->id = null;
                                                                                $post->tag_ids = collect($post->tags)->pluck('id');
                                $post->comment_ids = collect($post->comments)->pluck('id');
                                                $post->image_ids = collect($post->images)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para duplicar ENTRADA!',
          [
            'model' => $post,
            'lists' => Post::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post     * @return \Illuminate\Http\Response
     */
    public function update($postId, Request $request)
    {

        // user_can(['post.update']);

        $post = Post::findOrFail($postId);

        $this->varidate($request, $post);

        $input = $request->input('model');

                                                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $post->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $post);
          }

            if (isset($input['comments']) && count($input['comments'])) {
                \App\Models\Comment::where('post_id', $postId)
                    ->update(['post_id' => null]);
                foreach ($input['comments'] as $comment) {
                  \App\Models\Comment::find($comment['id'])->update(['post_id' => $post->id]);
                }
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
          'ENTRADA actualizado!',
          $post->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post     * @return \Illuminate\Http\Response
     */
    public function destroy($postId)
    {

        // user_can(['post.destroy']);

        $post = Post::findOrFail($postId);
        $post->delete();
        return $this->responseSuccess(
          'ENTRADA eliminado!',
          $post->toArray(),
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
    public function varidate(Request $request, Post $post = null)
    {
        $request->validate(Post::getValidateRule($post));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Post $post)
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
            $post->$method()->sync($pivotIds);
        }
    }


// end section

}
