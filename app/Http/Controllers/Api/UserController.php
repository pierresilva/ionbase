<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['user.index']);

		// $users = new User;
	    $users = User::with(User::getRelationships());

		// (1)filltering
        $users = $this->filtering($request, $users);
        $users = $users->get();

        // (2)sort
        $users = $this->sorting($request, $users);

        // (3)paginate
        $users = $users->paginate($request->get('per_page') ?? 10);

        $resource = $users->toArray();

        $resource['lists'] = User::getLists();

        return $this->responseSuccess(
          'USUARIO obtenidos!',
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
        // user_can(['user.create']);

            return response()->json([
              'message' => 'Formulario para crear USUARIO!',
              'data' => null,
              'lists' => User::getLists()
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
        // user_can(['user.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $user = User::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $user);
          }
            if (isset($input['posts']) && count($input['posts'])) {
                foreach ($input['posts'] as $post) {
                  \App\Models\Post::find($post['id'])->update(['user_id' => $user->id]);
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
          'USUARIO almacenado!',
          $user->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user     * @return \Illuminate\Http\Response
     */
    public function show($userId)
    {
        // user_can(['user.show']);

        $user = User::with(User::getRelationships())->findOrFail($userId);

                        $user->post_ids = collect($user->posts)->pluck('id');
                        
        $resource = $user->toArray();
        $resource['lists'] = User::getLists();

        return $this->responseSuccess(
          'USUARIO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user     * @return \Illuminate\Http\Response
     */
    public function edit($userId)
    {
        // user_can(['user.edit']);

        $user = User::with(User::getRelationships())->findOrFail($userId);
                        $user->post_ids = collect($user->posts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar USUARIO!',
          [
            'model' => $user,
            'lists' => User::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\User  $user	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($userId)
	{
        // user_can(['user.duplicate']);

        $user = User::with(User::getRelationships())->findOrFail($userId);
        $user->id = null;
                        $user->post_ids = collect($user->posts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar USUARIO!',
          [
            'model' => $user,
            'lists' => User::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user     * @return \Illuminate\Http\Response
     */
    public function update($userId, Request $request)
    {

        // user_can(['user.update']);

        $user = User::findOrFail($userId);

        $this->varidate($request, $user);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $user->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $user);
          }

            if (isset($input['posts']) && count($input['posts'])) {
                \App\Models\Post::where('user_id', $userId)
                    ->update(['post_id' => null]);
                foreach ($input['posts'] as $post) {
                  \App\Models\Post::find($post['id'])->update(['user_id' => $user->id]);
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
          'USUARIO actualizado!',
          $user->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user     * @return \Illuminate\Http\Response
     */
    public function destroy($userId)
    {

        // user_can(['user.destroy']);

        $user = User::findOrFail($userId);
        $user->delete();
        return $this->responseSuccess(
          'USUARIO eliminado!',
          $user->toArray(),
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
    public function varidate(Request $request, User $user = null)
    {
        $request->validate(User::getValidateRule($user));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, User $user)
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
            $user->$method()->sync($pivotIds);
        }
    }


// end section

}
