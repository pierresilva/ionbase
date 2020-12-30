<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperSector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperSectorController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_sector.index']);

		// $operSectors = new OperSector;
	    $operSectors = OperSector::with(OperSector::getRelationships());

		// (1)filltering
        $operSectors = $this->filtering($request, $operSectors);
        $operSectors = $operSectors->get();

        // (2)sort
        $operSectors = $this->sorting($request, $operSectors);

        // (3)paginate
        $operSectors = $operSectors->paginate($request->get('per_page') ?? 10);

        $resource = $operSectors->toArray();

        $resource['lists'] = OperSector::getLists();

        return $this->responseSuccess(
          'SECTORESOPERATIVO obtenidos!',
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
        // user_can(['oper_sector.create']);

            return response()->json([
              'message' => 'Formulario para crear SECTORESOPERATIVO!',
              'data' => null,
              'lists' => OperSector::getLists()
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
        // user_can(['oper_sector.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $operSector = OperSector::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operSector);
          }
            if (isset($input['oper_schedules']) && count($input['oper_schedules'])) {
                foreach ($input['oper_schedules'] as $operSchedule) {
                  \App\Models\OperSchedule::find($operSchedule['id'])->update(['oper_sector_id' => $operSector->id]);
                }
            }
            if (isset($input['oper_movements']) && count($input['oper_movements'])) {
                foreach ($input['oper_movements'] as $operMovement) {
                  \App\Models\OperMovement::find($operMovement['id'])->update(['oper_sector_id' => $operSector->id]);
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
          'SECTORESOPERATIVO almacenado!',
          $operSector->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function show($operSectorId)
    {
        // user_can(['oper_sector.show']);

        $operSector = OperSector::with(OperSector::getRelationships())->findOrFail($operSectorId);

                                                $operSector->oper_schedule_ids = collect($operSector->operSchedules)->pluck('id');
                                        $operSector->oper_movement_ids = collect($operSector->operMovements)->pluck('id');
                        
        $resource = $operSector->toArray();
        $resource['lists'] = OperSector::getLists();

        return $this->responseSuccess(
          'SECTORESOPERATIVO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function edit($operSectorId)
    {
        // user_can(['oper_sector.edit']);

        $operSector = OperSector::with(OperSector::getRelationships())->findOrFail($operSectorId);
                                                $operSector->oper_schedule_ids = collect($operSector->operSchedules)->pluck('id');
                                        $operSector->oper_movement_ids = collect($operSector->operMovements)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar SECTORESOPERATIVO!',
          [
            'model' => $operSector,
            'lists' => OperSector::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperSector  $operSector	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operSectorId)
	{
        // user_can(['oper_sector.duplicate']);

        $operSector = OperSector::with(OperSector::getRelationships())->findOrFail($operSectorId);
        $operSector->id = null;
                                                $operSector->oper_schedule_ids = collect($operSector->operSchedules)->pluck('id');
                                        $operSector->oper_movement_ids = collect($operSector->operMovements)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar SECTORESOPERATIVO!',
          [
            'model' => $operSector,
            'lists' => OperSector::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function update($operSectorId, Request $request)
    {

        // user_can(['oper_sector.update']);

        $operSector = OperSector::findOrFail($operSectorId);

        $this->varidate($request, $operSector);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $operSector->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operSector);
          }

            if (isset($input['oper_schedules']) && count($input['oper_schedules'])) {
                \App\Models\OperSchedule::where('oper_sector_id', $operSectorId)
                    ->update(['oper_sector_id' => null]);
                foreach ($input['oper_schedules'] as $operSchedule) {
                  \App\Models\OperSchedule::find($operSchedule['id'])->update(['oper_sector_id' => $operSector->id]);
                }
            }
            if (isset($input['oper_movements']) && count($input['oper_movements'])) {
                \App\Models\OperMovement::where('oper_sector_id', $operSectorId)
                    ->update(['oper_sector_id' => null]);
                foreach ($input['oper_movements'] as $operMovement) {
                  \App\Models\OperMovement::find($operMovement['id'])->update(['oper_sector_id' => $operSector->id]);
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
          'SECTORESOPERATIVO actualizado!',
          $operSector->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperSector  $operSector     * @return \Illuminate\Http\Response
     */
    public function destroy($operSectorId)
    {

        // user_can(['oper_sector.destroy']);

        $operSector = OperSector::findOrFail($operSectorId);
        $operSector->delete();
        return $this->responseSuccess(
          'SECTORESOPERATIVO eliminado!',
          $operSector->toArray(),
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
    public function varidate(Request $request, OperSector $operSector = null)
    {
        $request->validate(OperSector::getValidateRule($operSector));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperSector $operSector)
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
            $operSector->$method()->sync($pivotIds);
        }
    }


// end section

    public function generatePdf()
    {

        $operSectors = OperSector::with(OperSector::getRelationships())->get();

        return view('pdf.hous_units-qrs', ['sectors' => $operSectors]);
    }

}
