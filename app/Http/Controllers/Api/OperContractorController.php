<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperContractor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperContractorController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_contractor.index']);

		// $operContractors = new OperContractor;
	    $operContractors = OperContractor::with(OperContractor::getRelationships());

		// (1)filltering
        $operContractors = $this->filtering($request, $operContractors);
        $operContractors = $operContractors->get();

        // (2)sort
        $operContractors = $this->sorting($request, $operContractors);

        // (3)paginate
        $operContractors = $operContractors->paginate($request->get('per_page') ?? 10);

        $resource = $operContractors->toArray();

        $resource['lists'] = OperContractor::getLists();

        return $this->responseSuccess(
          'CONTRATISTASOPERATIVO obtenidos!',
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
        // user_can(['oper_contractor.create']);

            return response()->json([
              'message' => 'Formulario para crear CONTRATISTASOPERATIVO!',
              'data' => null,
              'lists' => OperContractor::getLists()
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
        // user_can(['oper_contractor.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $operContractor = OperContractor::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operContractor);
          }
            if (isset($input['oper_movements']) && count($input['oper_movements'])) {
                foreach ($input['oper_movements'] as $operMovement) {
                  \App\Models\OperMovement::find($operMovement['id'])->update(['oper_contractor_id' => $operContractor->id]);
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
          'CONTRATISTASOPERATIVO almacenado!',
          $operContractor->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperContractor  $operContractor     * @return \Illuminate\Http\Response
     */
    public function show($operContractorId)
    {
        // user_can(['oper_contractor.show']);

        $operContractor = OperContractor::with(OperContractor::getRelationships())->findOrFail($operContractorId);

                        $operContractor->oper_movement_ids = collect($operContractor->operMovements)->pluck('id');
                        
        $resource = $operContractor->toArray();
        $resource['lists'] = OperContractor::getLists();

        return $this->responseSuccess(
          'CONTRATISTASOPERATIVO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperContractor  $operContractor     * @return \Illuminate\Http\Response
     */
    public function edit($operContractorId)
    {
        // user_can(['oper_contractor.edit']);

        $operContractor = OperContractor::with(OperContractor::getRelationships())->findOrFail($operContractorId);
                        $operContractor->oper_movement_ids = collect($operContractor->operMovements)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar CONTRATISTASOPERATIVO!',
          [
            'model' => $operContractor,
            'lists' => OperContractor::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperContractor  $operContractor	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operContractorId)
	{
        // user_can(['oper_contractor.duplicate']);

        $operContractor = OperContractor::with(OperContractor::getRelationships())->findOrFail($operContractorId);
        $operContractor->id = null;
                        $operContractor->oper_movement_ids = collect($operContractor->operMovements)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar CONTRATISTASOPERATIVO!',
          [
            'model' => $operContractor,
            'lists' => OperContractor::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperContractor  $operContractor     * @return \Illuminate\Http\Response
     */
    public function update($operContractorId, Request $request)
    {

        // user_can(['oper_contractor.update']);

        $operContractor = OperContractor::findOrFail($operContractorId);

        $this->varidate($request, $operContractor);

        $input = $request->input('model');

                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $operContractor->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operContractor);
          }

            if (isset($input['oper_movements']) && count($input['oper_movements'])) {
                \App\Models\OperMovement::where('oper_contractor_id', $operContractorId)
                    ->update(['oper_contractor_id' => null]);
                foreach ($input['oper_movements'] as $operMovement) {
                  \App\Models\OperMovement::find($operMovement['id'])->update(['oper_contractor_id' => $operContractor->id]);
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
          'CONTRATISTASOPERATIVO actualizado!',
          $operContractor->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperContractor  $operContractor     * @return \Illuminate\Http\Response
     */
    public function destroy($operContractorId)
    {

        // user_can(['oper_contractor.destroy']);

        $operContractor = OperContractor::findOrFail($operContractorId);
        $operContractor->delete();
        return $this->responseSuccess(
          'CONTRATISTASOPERATIVO eliminado!',
          $operContractor->toArray(),
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
    public function varidate(Request $request, OperContractor $operContractor = null)
    {
        $request->validate(OperContractor::getValidateRule($operContractor));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperContractor $operContractor)
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
            $operContractor->$method()->sync($pivotIds);
        }
    }


// end section

}
