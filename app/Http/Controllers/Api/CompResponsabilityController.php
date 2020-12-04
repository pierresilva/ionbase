<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CompResponsability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompResponsabilityController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['comp_responsability.index']);

		// $compResponsabilities = new CompResponsability;
	    $compResponsabilities = CompResponsability::with(CompResponsability::getRelationships());

		// (1)filltering
        $compResponsabilities = $this->filtering($request, $compResponsabilities);
        $compResponsabilities = $compResponsabilities->get();

        // (2)sort
        $compResponsabilities = $this->sorting($request, $compResponsabilities);

        // (3)paginate
        $compResponsabilities = $compResponsabilities->paginate($request->get('per_page') ?? 10);

        $resource = $compResponsabilities->toArray();

        $resource['lists'] = CompResponsability::getLists();

        return $this->responseSuccess(
          'EMPRESASRESPONSABILIDADESLEGALE obtenidos!',
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
        // user_can(['comp_responsability.create']);

            return response()->json([
              'message' => 'Formulario para crear EMPRESASRESPONSABILIDADESLEGALE!',
              'data' => null,
              'lists' => CompResponsability::getLists()
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
        // user_can(['comp_responsability.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $compResponsability = CompResponsability::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $compResponsability);
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
          'EMPRESASRESPONSABILIDADESLEGALE almacenado!',
          $compResponsability->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function show($compResponsabilityId)
    {
        // user_can(['comp_responsability.show']);

        $compResponsability = CompResponsability::with(CompResponsability::getRelationships())->findOrFail($compResponsabilityId);

                                                        
        $resource = $compResponsability->toArray();
        $resource['lists'] = CompResponsability::getLists();

        return $this->responseSuccess(
          'EMPRESASRESPONSABILIDADESLEGALE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function edit($compResponsabilityId)
    {
        // user_can(['comp_responsability.edit']);

        $compResponsability = CompResponsability::with(CompResponsability::getRelationships())->findOrFail($compResponsabilityId);
                                                        
        return $this->responseSuccess(
          'Formulario para editar EMPRESASRESPONSABILIDADESLEGALE!',
          [
            'model' => $compResponsability,
            'lists' => CompResponsability::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CompResponsability  $compResponsability	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($compResponsabilityId)
	{
        // user_can(['comp_responsability.duplicate']);

        $compResponsability = CompResponsability::with(CompResponsability::getRelationships())->findOrFail($compResponsabilityId);
        $compResponsability->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para duplicar EMPRESASRESPONSABILIDADESLEGALE!',
          [
            'model' => $compResponsability,
            'lists' => CompResponsability::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function update($compResponsabilityId, Request $request)
    {

        // user_can(['comp_responsability.update']);

        $compResponsability = CompResponsability::findOrFail($compResponsabilityId);

        $this->varidate($request, $compResponsability);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $compResponsability->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $compResponsability);
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
          'EMPRESASRESPONSABILIDADESLEGALE actualizado!',
          $compResponsability->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompResponsability  $compResponsability     * @return \Illuminate\Http\Response
     */
    public function destroy($compResponsabilityId)
    {

        // user_can(['comp_responsability.destroy']);

        $compResponsability = CompResponsability::findOrFail($compResponsabilityId);
        $compResponsability->delete();
        return $this->responseSuccess(
          'EMPRESASRESPONSABILIDADESLEGALE eliminado!',
          $compResponsability->toArray(),
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
    public function varidate(Request $request, CompResponsability $compResponsability = null)
    {
        $request->validate(CompResponsability::getValidateRule($compResponsability));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompResponsability $compResponsability)
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
            $compResponsability->$method()->sync($pivotIds);
        }
    }


// end section

}
