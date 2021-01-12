<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperCorrectiveMaintenance;
use App\Models\OperMaintenanceRepair;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperMaintenanceRepairController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_maintenance_repair.index']);

		// $operMaintenanceRepairs = new OperMaintenanceRepair;
		$operMaintenanceRepairs = OperMaintenanceRepair::with(OperMaintenanceRepair::getRelationships());

		// (1)filltering
        $operMaintenanceRepairs = $this->filtering($request, $operMaintenanceRepairs);
        $operMaintenanceRepairs = $operMaintenanceRepairs->get();

        // (2)sort
        $operMaintenanceRepairs = $this->sorting($request, $operMaintenanceRepairs);

        // (3)paginate
        $operMaintenanceRepairs = $operMaintenanceRepairs->paginate($request->get('per_page') ?? 10);

        $resource = $operMaintenanceRepairs->toArray();

        $resource['lists'] = OperMaintenanceRepair::getLists();

        return $this->responseSuccess(
          'Reparaciones obtenidas!',
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
        // user_can(['oper_maintenance_repair.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADREPARACIONE obtenido!',
              'data' => null,
              'lists' => OperMaintenanceRepair::getLists()
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
        // user_can(['oper_maintenance_repair.store']);

        $this->varidate($request);

        $input = $request->input('model');

        DB::beginTransaction();
        try {
          //create data
          $operMaintenanceRepair = OperMaintenanceRepair::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operMaintenanceRepair);
          }

          $operCorrectiveMaintenance = OperCorrectiveMaintenance::where('id', $input['oper_corrective_maintenance_id'])->first();

          $operCorrectiveMaintenance->update([
              'status' => 'resolved'
          ]);


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
          'OPERATIVIDADREPARACIONE almacenado!',
          $operMaintenanceRepair->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperMaintenanceRepair  $operMaintenanceRepair     * @return \Illuminate\Http\Response
     */
    public function show($operMaintenanceRepairId)
    {
        // user_can(['oper_maintenance_repair.show']);

        $operMaintenanceRepair = OperMaintenanceRepair::with(OperMaintenanceRepair::getRelationships())->findOrFail($operMaintenanceRepairId);

                                
        $resource = $operMaintenanceRepair->toArray();
        $resource['lists'] = OperMaintenanceRepair::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADREPARACIONE obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperMaintenanceRepair  $operMaintenanceRepair     * @return \Illuminate\Http\Response
     */
    public function edit($operMaintenanceRepairId)
    {
        // user_can(['oper_maintenance_repair.edit']);

        $operMaintenanceRepair = OperMaintenanceRepair::with(OperMaintenanceRepair::getRelationships())->findOrFail($operMaintenanceRepairId);
                                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADREPARACIONE obtenidos!',
          [
            'model' => $operMaintenanceRepair,
            'lists' => OperMaintenanceRepair::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperMaintenanceRepair  $operMaintenanceRepair	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operMaintenanceRepairId)
	{
        // user_can(['oper_maintenance_repair.duplicate']);

        $operMaintenanceRepair = OperMaintenanceRepair::with(OperMaintenanceRepair::getRelationships())->findOrFail($operMaintenanceRepairId);
        $operMaintenanceRepair->id = null;
                                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADREPARACIONE obtenidos!',
          [
            'model' => $operMaintenanceRepair,
            'lists' => OperMaintenanceRepair::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperMaintenanceRepair  $operMaintenanceRepair     * @return \Illuminate\Http\Response
     */
    public function update($operMaintenanceRepairId, Request $request)
    {

        // user_can(['oper_maintenance_repair.update']);

        $operMaintenanceRepair = OperMaintenanceRepair::findOrFail($operMaintenanceRepairId);

        $this->varidate($request, $operMaintenanceRepair);

        $input = $request->input('model');

        DB::beginTransaction();
        try {
          //update data
          $operMaintenanceRepair->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operMaintenanceRepair);
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
          'OPERATIVIDADREPARACIONE actualizado!',
          $operMaintenanceRepair->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperMaintenanceRepair  $operMaintenanceRepair     * @return \Illuminate\Http\Response
     */
    public function destroy($operMaintenanceRepairId)
    {

        // user_can(['oper_maintenance_repair.destroy']);

        $operMaintenanceRepair = OperMaintenanceRepair::findOrFail($operMaintenanceRepairId);
        $operMaintenanceRepair->delete();
        return $this->responseSuccess(
          'OPERATIVIDADREPARACIONE eliminado!',
          $operMaintenanceRepair->toArray(),
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
    public function varidate(Request $request, OperMaintenanceRepair $operMaintenanceRepair = null)
    {
        $request->validate(OperMaintenanceRepair::getValidateRule($operMaintenanceRepair));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperMaintenanceRepair $operMaintenanceRepair)
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
            $operMaintenanceRepair->$method()->sync($pivotIds);
        }
    }

// end section

}
