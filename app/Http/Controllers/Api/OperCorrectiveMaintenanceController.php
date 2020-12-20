<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperCorrectiveMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperCorrectiveMaintenanceController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_corrective_maintenance.index']);

		// $operCorrectiveMaintenances = new OperCorrectiveMaintenance;
		$operCorrectiveMaintenances = OperCorrectiveMaintenance::with(OperCorrectiveMaintenance::getRelationships());

		// (1)filltering
        $operCorrectiveMaintenances = $this->filtering($request, $operCorrectiveMaintenances);
        $operCorrectiveMaintenances = $operCorrectiveMaintenances->get();

        // (2)sort
        $operCorrectiveMaintenances = $this->sorting($request, $operCorrectiveMaintenances);

        // (3)paginate
        $operCorrectiveMaintenances = $operCorrectiveMaintenances->paginate($request->get('per_page') ?? 10);

        $resource = $operCorrectiveMaintenances->toArray();

        $resource['lists'] = OperCorrectiveMaintenance::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMTTOCORRECTIVO obtenidos!',
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
        // user_can(['oper_corrective_maintenance.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADMTTOCORRECTIVO obtenido!',
              'data' => null,
              'lists' => OperCorrectiveMaintenance::getLists()
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
        // user_can(['oper_corrective_maintenance.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $operCorrectiveMaintenance = OperCorrectiveMaintenance::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operCorrectiveMaintenance);
          }

            if (isset($input['oper_maintenance_repairs']) && count($input['oper_maintenance_repairs'])) {
                foreach ($input['oper_maintenance_repairs'] as $operMaintenanceRepair) {
                  \App\Models\OperMaintenanceRepair::find($operMaintenanceRepair['id'])->update(['oper_corrective_maintenance_id' => $operCorrectiveMaintenance->id]);
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
          'OPERATIVIDADMTTOCORRECTIVO almacenado!',
          $operCorrectiveMaintenance->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperCorrectiveMaintenance  $operCorrectiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function show($operCorrectiveMaintenanceId)
    {
        // user_can(['oper_corrective_maintenance.show']);

        $operCorrectiveMaintenance = OperCorrectiveMaintenance::with(OperCorrectiveMaintenance::getRelationships())->findOrFail($operCorrectiveMaintenanceId);

                                                                                $operCorrectiveMaintenance->oper_item_ids = collect($operCorrectiveMaintenance->operItems)->pluck('id');
                                $operCorrectiveMaintenance->oper_maintenance_repair_ids = collect($operCorrectiveMaintenance->operMaintenanceRepairs)->pluck('id');
                        
        $resource = $operCorrectiveMaintenance->toArray();
        $resource['lists'] = OperCorrectiveMaintenance::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMTTOCORRECTIVO obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperCorrectiveMaintenance  $operCorrectiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function edit($operCorrectiveMaintenanceId)
    {
        // user_can(['oper_corrective_maintenance.edit']);

        $operCorrectiveMaintenance = OperCorrectiveMaintenance::with(OperCorrectiveMaintenance::getRelationships())->findOrFail($operCorrectiveMaintenanceId);
                                                                                $operCorrectiveMaintenance->oper_item_ids = collect($operCorrectiveMaintenance->operItems)->pluck('id');
                                $operCorrectiveMaintenance->oper_maintenance_repair_ids = collect($operCorrectiveMaintenance->operMaintenanceRepairs)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operCorrectiveMaintenance,
            'lists' => OperCorrectiveMaintenance::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperCorrectiveMaintenance  $operCorrectiveMaintenance	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operCorrectiveMaintenanceId)
	{
        // user_can(['oper_corrective_maintenance.duplicate']);

        $operCorrectiveMaintenance = OperCorrectiveMaintenance::with(OperCorrectiveMaintenance::getRelationships())->findOrFail($operCorrectiveMaintenanceId);
        $operCorrectiveMaintenance->id = null;
                                                                                $operCorrectiveMaintenance->oper_item_ids = collect($operCorrectiveMaintenance->operItems)->pluck('id');
                                $operCorrectiveMaintenance->oper_maintenance_repair_ids = collect($operCorrectiveMaintenance->operMaintenanceRepairs)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operCorrectiveMaintenance,
            'lists' => OperCorrectiveMaintenance::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperCorrectiveMaintenance  $operCorrectiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function update($operCorrectiveMaintenanceId, Request $request)
    {

        // user_can(['oper_corrective_maintenance.update']);

        $operCorrectiveMaintenance = OperCorrectiveMaintenance::findOrFail($operCorrectiveMaintenanceId);

        $this->varidate($request, $operCorrectiveMaintenance);

        $input = $request->input('model');

                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $operCorrectiveMaintenance->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operCorrectiveMaintenance);
          }

                                                                                          if (isset($input['oper_maintenance_repairs']) && count($input['oper_maintenance_repairs'])) {
              \App\Models\OperMaintenanceRepair::where('oper_corrective_maintenance_id', $operCorrectiveMaintenanceId)
                  ->update(['oper_corrective_maintenance_id' => null]);
              foreach ($input['oper_maintenance_repairs'] as $operMaintenanceRepair) {
                \App\Models\OperMaintenanceRepair::find($operMaintenanceRepair['id'])->update(['oper_corrective_maintenance_id' => $operCorrectiveMaintenance->id]);
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
          'OPERATIVIDADMTTOCORRECTIVO actualizado!',
          $operCorrectiveMaintenance->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperCorrectiveMaintenance  $operCorrectiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function destroy($operCorrectiveMaintenanceId)
    {

        // user_can(['oper_corrective_maintenance.destroy']);

        $operCorrectiveMaintenance = OperCorrectiveMaintenance::findOrFail($operCorrectiveMaintenanceId);
        $operCorrectiveMaintenance->delete();
        return $this->responseSuccess(
          'OPERATIVIDADMTTOCORRECTIVO eliminado!',
          $operCorrectiveMaintenance->toArray(),
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
    public function varidate(Request $request, OperCorrectiveMaintenance $operCorrectiveMaintenance = null)
    {
        $request->validate(OperCorrectiveMaintenance::getValidateRule($operCorrectiveMaintenance));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperCorrectiveMaintenance $operCorrectiveMaintenance)
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
            $operCorrectiveMaintenance->$method()->sync($pivotIds);
        }
    }

// end section

}
