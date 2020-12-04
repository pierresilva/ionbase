<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\HousUnitArea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HousUnitAreaController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['hous_unit_area.index']);

		// $housUnitAreas = new HousUnitArea;
	    $housUnitAreas = HousUnitArea::with(HousUnitArea::getRelationships());

		// (1)filltering
        $housUnitAreas = $this->filtering($request, $housUnitAreas);
        $housUnitAreas = $housUnitAreas->get();

        // (2)sort
        $housUnitAreas = $this->sorting($request, $housUnitAreas);

        // (3)paginate
        $housUnitAreas = $housUnitAreas->paginate($request->get('per_page') ?? 10);

        $resource = $housUnitAreas->toArray();

        $resource['lists'] = HousUnitArea::getLists();

        return $this->responseSuccess(
          'AREASDEUNIDADESHABITACIONALE obtenidos!',
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
        // user_can(['hous_unit_area.create']);

            return response()->json([
              'message' => 'Formulario para crear AREASDEUNIDADESHABITACIONALE!',
              'data' => null,
              'lists' => HousUnitArea::getLists()
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
        // user_can(['hous_unit_area.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $housUnitArea = HousUnitArea::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $housUnitArea);
          }
            if (isset($input['oper_schedules']) && count($input['oper_schedules'])) {
                foreach ($input['oper_schedules'] as $operSchedule) {
                  \App\Models\OperSchedule::find($operSchedule['id'])->update(['hous_unit_area_id' => $housUnitArea->id]);
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
          'AREASDEUNIDADESHABITACIONALE almacenado!',
          $housUnitArea->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function show($housUnitAreaId)
    {
        // user_can(['hous_unit_area.show']);

        $housUnitArea = HousUnitArea::with(HousUnitArea::getRelationships())->findOrFail($housUnitAreaId);

                                                $housUnitArea->oper_schedule_ids = collect($housUnitArea->operSchedules)->pluck('id');
                        
        $resource = $housUnitArea->toArray();
        $resource['lists'] = HousUnitArea::getLists();

        return $this->responseSuccess(
          'AREASDEUNIDADESHABITACIONALE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function edit($housUnitAreaId)
    {
        // user_can(['hous_unit_area.edit']);

        $housUnitArea = HousUnitArea::with(HousUnitArea::getRelationships())->findOrFail($housUnitAreaId);
                                                $housUnitArea->oper_schedule_ids = collect($housUnitArea->operSchedules)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar AREASDEUNIDADESHABITACIONALE!',
          [
            'model' => $housUnitArea,
            'lists' => HousUnitArea::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\HousUnitArea  $housUnitArea	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($housUnitAreaId)
	{
        // user_can(['hous_unit_area.duplicate']);

        $housUnitArea = HousUnitArea::with(HousUnitArea::getRelationships())->findOrFail($housUnitAreaId);
        $housUnitArea->id = null;
                                                $housUnitArea->oper_schedule_ids = collect($housUnitArea->operSchedules)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar AREASDEUNIDADESHABITACIONALE!',
          [
            'model' => $housUnitArea,
            'lists' => HousUnitArea::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function update($housUnitAreaId, Request $request)
    {

        // user_can(['hous_unit_area.update']);

        $housUnitArea = HousUnitArea::findOrFail($housUnitAreaId);

        $this->varidate($request, $housUnitArea);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $housUnitArea->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $housUnitArea);
          }

            if (isset($input['oper_schedules']) && count($input['oper_schedules'])) {
                \App\Models\OperSchedule::where('hous_unit_area_id', $housUnitAreaId)
                    ->update(['hous_unit_area_id' => null]);
                foreach ($input['oper_schedules'] as $operSchedule) {
                  \App\Models\OperSchedule::find($operSchedule['id'])->update(['hous_unit_area_id' => $housUnitArea->id]);
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
          'AREASDEUNIDADESHABITACIONALE actualizado!',
          $housUnitArea->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HousUnitArea  $housUnitArea     * @return \Illuminate\Http\Response
     */
    public function destroy($housUnitAreaId)
    {

        // user_can(['hous_unit_area.destroy']);

        $housUnitArea = HousUnitArea::findOrFail($housUnitAreaId);
        $housUnitArea->delete();
        return $this->responseSuccess(
          'AREASDEUNIDADESHABITACIONALE eliminado!',
          $housUnitArea->toArray(),
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
    public function varidate(Request $request, HousUnitArea $housUnitArea = null)
    {
        $request->validate(HousUnitArea::getValidateRule($housUnitArea));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, HousUnitArea $housUnitArea)
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
            $housUnitArea->$method()->sync($pivotIds);
        }
    }


// end section

}
