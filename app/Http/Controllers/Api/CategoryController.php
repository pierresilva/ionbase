<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoryController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['category.index']);

		// $categories = new Category;
	    $categories = Category::with(Category::getRelationships());

		// (1)filltering
        $categories = $this->filtering($request, $categories);
        $categories = $categories->get();

        // (2)sort
        $categories = $this->sorting($request, $categories);

        // (3)paginate
        $categories = $categories->paginate($request->get('per_page') ?? 10);

        $resource = $categories->toArray();

        $resource['lists'] = Category::getLists();

        return $this->responseSuccess(
          'CATEGORÍA obtenidos!',
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
        // user_can(['category.create']);

            return response()->json([
              'message' => 'Formulario para crear CATEGORÍA!',
              'data' => null,
              'lists' => Category::getLists()
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
        // user_can(['category.store']);

        $this->varidate($request);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //create data
          $category = Category::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $category);
          }
            if (isset($input['posts']) && count($input['posts'])) {
                foreach ($input['posts'] as $post) {
                  \App\Models\Post::find($post['id'])->update(['category_id' => $category->id]);
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
          'CATEGORÍA almacenado!',
          $category->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category     * @return \Illuminate\Http\Response
     */
    public function show($categoryId)
    {
        // user_can(['category.show']);

        $category = Category::with(Category::getRelationships())->findOrFail($categoryId);

                        $category->post_ids = collect($category->posts)->pluck('id');
                        
        $resource = $category->toArray();
        $resource['lists'] = Category::getLists();

        return $this->responseSuccess(
          'CATEGORÍA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category     * @return \Illuminate\Http\Response
     */
    public function edit($categoryId)
    {
        // user_can(['category.edit']);

        $category = Category::with(Category::getRelationships())->findOrFail($categoryId);
                        $category->post_ids = collect($category->posts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar CATEGORÍA!',
          [
            'model' => $category,
            'lists' => Category::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Category  $category	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($categoryId)
	{
        // user_can(['category.duplicate']);

        $category = Category::with(Category::getRelationships())->findOrFail($categoryId);
        $category->id = null;
                        $category->post_ids = collect($category->posts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar CATEGORÍA!',
          [
            'model' => $category,
            'lists' => Category::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category     * @return \Illuminate\Http\Response
     */
    public function update($categoryId, Request $request)
    {

        // user_can(['category.update']);

        $category = Category::findOrFail($categoryId);

        $this->varidate($request, $category);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //update data
          $category->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $category);
          }

            if (isset($input['posts']) && count($input['posts'])) {
                \App\Models\Post::where('category_id', $categoryId)
                    ->update(['category_id' => null]);
                foreach ($input['posts'] as $post) {
                  \App\Models\Post::find($post['id'])->update(['category_id' => $category->id]);
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
          'CATEGORÍA actualizado!',
          $category->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category     * @return \Illuminate\Http\Response
     */
    public function destroy($categoryId)
    {

        // user_can(['category.destroy']);

        $category = Category::findOrFail($categoryId);
        $category->delete();
        return $this->responseSuccess(
          'CATEGORÍA eliminado!',
          $category->toArray(),
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
    public function varidate(Request $request, Category $category = null)
    {
        $request->validate(Category::getValidateRule($category));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Category $category)
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
            $category->$method()->sync($pivotIds);
        }
    }


// end section

}
