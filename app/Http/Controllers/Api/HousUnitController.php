<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\HousUnit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HousUnitController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['hous_unit.index']);

		// $housUnits = new HousUnit;
	    $housUnits = HousUnit::with(HousUnit::getRelationships());

		// (1)filltering
        $housUnits = $this->filtering($request, $housUnits);
        $housUnits = $housUnits->get();

        // (2)sort
        $housUnits = $this->sorting($request, $housUnits);

        // (3)paginate
        if (!$request->get('all')) {
            $housUnits = $housUnits->paginate($request->get('per_page') ?? 10);
        }

        $resource = [];

        $request->get('all') ? $resource['data'] = $housUnits->toArray() : $resource = $housUnits->toArray();

        $resource['lists'] = HousUnit::getLists();

        return $this->responseSuccess(
          'UNIDADES HABITACIONALES obtenidos!',
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
        // user_can(['hous_unit.create']);

            return response()->json([
              'message' => 'Formulario para crear UNIDADES HABITACIONALES!',
              'data' => null,
              'lists' => HousUnit::getLists()
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
        // user_can(['hous_unit.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $housUnit = HousUnit::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $housUnit);
          }
            if (isset($input['hous_unit_areas']) && count($input['hous_unit_areas'])) {
                foreach ($input['hous_unit_areas'] as $housUnitArea) {
                  \App\Models\HousUnitArea::find($housUnitArea['id'])->update(['hous_unit_id' => $housUnit->id]);
                }
            }
            if (isset($input['oper_sectors']) && count($input['oper_sectors'])) {
                foreach ($input['oper_sectors'] as $operSector) {
                  \App\Models\OperSector::find($operSector['id'])->update(['hous_unit_id' => $housUnit->id]);
                }
            }
            if (isset($input['corr_packets']) && count($input['corr_packets'])) {
                foreach ($input['corr_packets'] as $corrPacket) {
                  \App\Models\CorrPacket::find($corrPacket['id'])->update(['hous_unit_id' => $housUnit->id]);
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
          'UNIDADESHABITACIONALE almacenado!',
          $housUnit->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function show($housUnitId)
    {
        // user_can(['hous_unit.show']);

        $housUnit = HousUnit::with(HousUnit::getRelationships())->findOrFail($housUnitId);

                        $housUnit->hous_unit_area_ids = collect($housUnit->housUnitAreas)->pluck('id');
                                        $housUnit->oper_sector_ids = collect($housUnit->operSectors)->pluck('id');
                                        $housUnit->corr_packet_ids = collect($housUnit->corrPackets)->pluck('id');
                        
        $resource = $housUnit->toArray();
        $resource['lists'] = HousUnit::getLists();

        return $this->responseSuccess(
          'UNIDADESHABITACIONALE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function edit($housUnitId)
    {
        // user_can(['hous_unit.edit']);

        $housUnit = HousUnit::with(HousUnit::getRelationships())->findOrFail($housUnitId);
                        $housUnit->hous_unit_area_ids = collect($housUnit->housUnitAreas)->pluck('id');
                                        $housUnit->oper_sector_ids = collect($housUnit->operSectors)->pluck('id');
                                        $housUnit->corr_packet_ids = collect($housUnit->corrPackets)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar UNIDADESHABITACIONALE!',
          [
            'model' => $housUnit,
            'lists' => HousUnit::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\HousUnit  $housUnit	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($housUnitId)
	{
        // user_can(['hous_unit.duplicate']);

        $housUnit = HousUnit::with(HousUnit::getRelationships())->findOrFail($housUnitId);
        $housUnit->id = null;
                        $housUnit->hous_unit_area_ids = collect($housUnit->housUnitAreas)->pluck('id');
                                        $housUnit->oper_sector_ids = collect($housUnit->operSectors)->pluck('id');
                                        $housUnit->corr_packet_ids = collect($housUnit->corrPackets)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar UNIDADESHABITACIONALE!',
          [
            'model' => $housUnit,
            'lists' => HousUnit::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function update($housUnitId, Request $request)
    {

        // user_can(['hous_unit.update']);

        $housUnit = HousUnit::findOrFail($housUnitId);

        $this->varidate($request, $housUnit);

        $input = $request->input('model');

                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $housUnit->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $housUnit);
          }

            if (isset($input['hous_unit_areas']) && count($input['hous_unit_areas'])) {
                \App\Models\HousUnitArea::where('hous_unit_id', $housUnitId)
                    ->update(['hous_unit_id' => null]);
                foreach ($input['hous_unit_areas'] as $housUnitArea) {
                  \App\Models\HousUnitArea::find($housUnitArea['id'])->update(['hous_unit_id' => $housUnit->id]);
                }
            }
            if (isset($input['oper_sectors']) && count($input['oper_sectors'])) {
                \App\Models\OperSector::where('hous_unit_id', $housUnitId)
                    ->update(['hous_unit_id' => null]);
                foreach ($input['oper_sectors'] as $operSector) {
                  \App\Models\OperSector::find($operSector['id'])->update(['hous_unit_id' => $housUnit->id]);
                }
            }
            if (isset($input['corr_packets']) && count($input['corr_packets'])) {
                \App\Models\CorrPacket::where('hous_unit_id', $housUnitId)
                    ->update(['hous_unit_id' => null]);
                foreach ($input['corr_packets'] as $corrPacket) {
                  \App\Models\CorrPacket::find($corrPacket['id'])->update(['hous_unit_id' => $housUnit->id]);
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
          'UNIDADESHABITACIONALE actualizado!',
          $housUnit->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HousUnit  $housUnit     * @return \Illuminate\Http\Response
     */
    public function destroy($housUnitId)
    {

        // user_can(['hous_unit.destroy']);

        $housUnit = HousUnit::findOrFail($housUnitId);
        $housUnit->delete();
        return $this->responseSuccess(
          'UNIDADESHABITACIONALE eliminado!',
          $housUnit->toArray(),
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
    public function varidate(Request $request, HousUnit $housUnit = null)
    {
        $request->validate(HousUnit::getValidateRule($housUnit));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, HousUnit $housUnit)
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
            $housUnit->$method()->sync($pivotIds);
        }
    }


// end section

}
