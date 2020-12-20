<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperPreventiveMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperPreventiveMaintenanceController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_preventive_maintenance.index']);

		// $operPreventiveMaintenances = new OperPreventiveMaintenance;
		$operPreventiveMaintenances = OperPreventiveMaintenance::with(OperPreventiveMaintenance::getRelationships());

		// (1)filltering
        $operPreventiveMaintenances = $this->filtering($request, $operPreventiveMaintenances);
        $operPreventiveMaintenances = $operPreventiveMaintenances->get();

        // (2)sort
        $operPreventiveMaintenances = $this->sorting($request, $operPreventiveMaintenances);

        // (3)paginate
        $operPreventiveMaintenances = $operPreventiveMaintenances->paginate($request->get('per_page') ?? 10);

        $resource = $operPreventiveMaintenances->toArray();

        $resource['lists'] = OperPreventiveMaintenance::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMTTOPREVENTIVO obtenidos!',
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
        // user_can(['oper_preventive_maintenance.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADMTTOPREVENTIVO obtenido!',
              'data' => null,
              'lists' => OperPreventiveMaintenance::getLists()
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
        // user_can(['oper_preventive_maintenance.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $operPreventiveMaintenance = OperPreventiveMaintenance::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operPreventiveMaintenance);
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
          'OPERATIVIDADMTTOPREVENTIVO almacenado!',
          $operPreventiveMaintenance->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function show($operPreventiveMaintenanceId)
    {
        // user_can(['oper_preventive_maintenance.show']);

        $operPreventiveMaintenance = OperPreventiveMaintenance::with(OperPreventiveMaintenance::getRelationships())->findOrFail($operPreventiveMaintenanceId);

                                
        $resource = $operPreventiveMaintenance->toArray();
        $resource['lists'] = OperPreventiveMaintenance::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMTTOPREVENTIVO obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function edit($operPreventiveMaintenanceId)
    {
        // user_can(['oper_preventive_maintenance.edit']);

        $operPreventiveMaintenance = OperPreventiveMaintenance::with(OperPreventiveMaintenance::getRelationships())->findOrFail($operPreventiveMaintenanceId);
                                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMTTOPREVENTIVO obtenidos!',
          [
            'model' => $operPreventiveMaintenance,
            'lists' => OperPreventiveMaintenance::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperPreventiveMaintenance  $operPreventiveMaintenance	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operPreventiveMaintenanceId)
	{
        // user_can(['oper_preventive_maintenance.duplicate']);

        $operPreventiveMaintenance = OperPreventiveMaintenance::with(OperPreventiveMaintenance::getRelationships())->findOrFail($operPreventiveMaintenanceId);
        $operPreventiveMaintenance->id = null;
                                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMTTOPREVENTIVO obtenidos!',
          [
            'model' => $operPreventiveMaintenance,
            'lists' => OperPreventiveMaintenance::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function update($operPreventiveMaintenanceId, Request $request)
    {

        // user_can(['oper_preventive_maintenance.update']);

        $operPreventiveMaintenance = OperPreventiveMaintenance::findOrFail($operPreventiveMaintenanceId);

        $this->varidate($request, $operPreventiveMaintenance);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $operPreventiveMaintenance->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operPreventiveMaintenance);
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
          'OPERATIVIDADMTTOPREVENTIVO actualizado!',
          $operPreventiveMaintenance->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperPreventiveMaintenance  $operPreventiveMaintenance     * @return \Illuminate\Http\Response
     */
    public function destroy($operPreventiveMaintenanceId)
    {

        // user_can(['oper_preventive_maintenance.destroy']);

        $operPreventiveMaintenance = OperPreventiveMaintenance::findOrFail($operPreventiveMaintenanceId);
        $operPreventiveMaintenance->delete();
        return $this->responseSuccess(
          'OPERATIVIDADMTTOPREVENTIVO eliminado!',
          $operPreventiveMaintenance->toArray(),
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
    public function varidate(Request $request, OperPreventiveMaintenance $operPreventiveMaintenance = null)
    {
        $request->validate(OperPreventiveMaintenance::getValidateRule($operPreventiveMaintenance));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperPreventiveMaintenance $operPreventiveMaintenance)
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
            $operPreventiveMaintenance->$method()->sync($pivotIds);
        }
    }

// end section

}
