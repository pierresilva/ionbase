<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperMovement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperMovementController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_movement.index']);

		// $operMovements = new OperMovement;
	    $operMovements = OperMovement::with(OperMovement::getRelationships());

		// (1)filltering
        $operMovements = $this->filtering($request, $operMovements);
        $operMovements = $operMovements->get();

        // (2)sort
        $operMovements = $this->sorting($request, $operMovements);

        // (3)paginate
        $operMovements = $operMovements->paginate($request->get('per_page') ?? 10);

        $resource = $operMovements->toArray();

        $resource['lists'] = OperMovement::getLists();

        return $this->responseSuccess(
          'MOVIMIENTOSOPERATIVO obtenidos!',
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
        // user_can(['oper_movement.create']);

            return response()->json([
              'message' => 'Formulario para crear MOVIMIENTOSOPERATIVO!',
              'data' => null,
              'lists' => OperMovement::getLists()
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
        // user_can(['oper_movement.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $operMovement = OperMovement::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operMovement);
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
          'MOVIMIENTOSOPERATIVO almacenado!',
          $operMovement->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperMovement  $operMovement     * @return \Illuminate\Http\Response
     */
    public function show($operMovementId)
    {
        // user_can(['oper_movement.show']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);

                                                        
        $resource = $operMovement->toArray();
        $resource['lists'] = OperMovement::getLists();

        return $this->responseSuccess(
          'MOVIMIENTOSOPERATIVO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperMovement  $operMovement     * @return \Illuminate\Http\Response
     */
    public function edit($operMovementId)
    {
        // user_can(['oper_movement.edit']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);
                                                        
        return $this->responseSuccess(
          'Formulario para editar MOVIMIENTOSOPERATIVO!',
          [
            'model' => $operMovement,
            'lists' => OperMovement::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperMovement  $operMovement	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operMovementId)
	{
        // user_can(['oper_movement.duplicate']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);
        $operMovement->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para duplicar MOVIMIENTOSOPERATIVO!',
          [
            'model' => $operMovement,
            'lists' => OperMovement::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperMovement  $operMovement     * @return \Illuminate\Http\Response
     */
    public function update($operMovementId, Request $request)
    {

        // user_can(['oper_movement.update']);

        $operMovement = OperMovement::findOrFail($operMovementId);

        $this->varidate($request, $operMovement);

        $input = $request->input('model');

                                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $operMovement->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operMovement);
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
          'MOVIMIENTOSOPERATIVO actualizado!',
          $operMovement->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperMovement  $operMovement     * @return \Illuminate\Http\Response
     */
    public function destroy($operMovementId)
    {

        // user_can(['oper_movement.destroy']);

        $operMovement = OperMovement::findOrFail($operMovementId);
        $operMovement->delete();
        return $this->responseSuccess(
          'MOVIMIENTOSOPERATIVO eliminado!',
          $operMovement->toArray(),
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
    public function varidate(Request $request, OperMovement $operMovement = null)
    {
        $request->validate(OperMovement::getValidateRule($operMovement));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperMovement $operMovement)
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
            $operMovement->$method()->sync($pivotIds);
        }
    }


// end section

}
