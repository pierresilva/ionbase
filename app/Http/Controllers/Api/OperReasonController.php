<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperReason;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperReasonController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_reason.index']);

		// $operReasons = new OperReason;
		$operReasons = OperReason::with(OperReason::getRelationships());

		// (1)filltering
        $operReasons = $this->filtering($request, $operReasons);
        $operReasons = $operReasons->get();

        // (2)sort
        $operReasons = $this->sorting($request, $operReasons);

        // (3)paginate
        $operReasons = $operReasons->paginate($request->get('per_page') ?? 10);

        $resource = $operReasons->toArray();

        $resource['lists'] = OperReason::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMOTIVOSMTTOCORRECTIVO obtenidos!',
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
        // user_can(['oper_reason.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADMOTIVOSMTTOCORRECTIVO obtenido!',
              'data' => null,
              'lists' => OperReason::getLists()
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
        // user_can(['oper_reason.store']);

        $this->varidate($request);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //create data
          $operReason = OperReason::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operReason);
          }

            if (isset($input['oper_corrective_maintenances']) && count($input['oper_corrective_maintenances'])) {
                foreach ($input['oper_corrective_maintenances'] as $operCorrectiveMaintenance) {
                  \App\Models\OperCorrectiveMaintenance::find($operCorrectiveMaintenance['id'])->update(['oper_reason_id' => $operReason->id]);
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
          'OPERATIVIDADMOTIVOSMTTOCORRECTIVO almacenado!',
          $operReason->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function show($operReasonId)
    {
        // user_can(['oper_reason.show']);

        $operReason = OperReason::with(OperReason::getRelationships())->findOrFail($operReasonId);

                        $operReason->oper_corrective_maintenance_ids = collect($operReason->operCorrectiveMaintenances)->pluck('id');
                        
        $resource = $operReason->toArray();
        $resource['lists'] = OperReason::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADMOTIVOSMTTOCORRECTIVO obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function edit($operReasonId)
    {
        // user_can(['oper_reason.edit']);

        $operReason = OperReason::with(OperReason::getRelationships())->findOrFail($operReasonId);
                        $operReason->oper_corrective_maintenance_ids = collect($operReason->operCorrectiveMaintenances)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMOTIVOSMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operReason,
            'lists' => OperReason::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperReason  $operReason	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operReasonId)
	{
        // user_can(['oper_reason.duplicate']);

        $operReason = OperReason::with(OperReason::getRelationships())->findOrFail($operReasonId);
        $operReason->id = null;
                        $operReason->oper_corrective_maintenance_ids = collect($operReason->operCorrectiveMaintenances)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADMOTIVOSMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operReason,
            'lists' => OperReason::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function update($operReasonId, Request $request)
    {

        // user_can(['oper_reason.update']);

        $operReason = OperReason::findOrFail($operReasonId);

        $this->varidate($request, $operReason);

        $input = $request->input('model');

                        
        DB::beginTransaction();
        try {
          //update data
          $operReason->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operReason);
          }

                              if (isset($input['oper_corrective_maintenances']) && count($input['oper_corrective_maintenances'])) {
              \App\Models\OperCorrectiveMaintenance::where('oper_reason_id', $operReasonId)
                  ->update(['oper_reason_id' => null]);
              foreach ($input['oper_corrective_maintenances'] as $operCorrectiveMaintenance) {
                \App\Models\OperCorrectiveMaintenance::find($operCorrectiveMaintenance['id'])->update(['oper_reason_id' => $operReason->id]);
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
          'OPERATIVIDADMOTIVOSMTTOCORRECTIVO actualizado!',
          $operReason->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperReason  $operReason     * @return \Illuminate\Http\Response
     */
    public function destroy($operReasonId)
    {

        // user_can(['oper_reason.destroy']);

        $operReason = OperReason::findOrFail($operReasonId);
        $operReason->delete();
        return $this->responseSuccess(
          'OPERATIVIDADMOTIVOSMTTOCORRECTIVO eliminado!',
          $operReason->toArray(),
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
    public function varidate(Request $request, OperReason $operReason = null)
    {
        $request->validate(OperReason::getValidateRule($operReason));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperReason $operReason)
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
            $operReason->$method()->sync($pivotIds);
        }
    }

// end section

}
