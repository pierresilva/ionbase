<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperContractor;
use App\Models\OperMovement;
use App\Models\OperSchedule;
use App\Models\OperSector;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperMovementController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
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
            'MOVIMIENTOS OPERATIVOS obtenidos!',
            $resource,
            true,
            false
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        // user_can(['oper_movement.create']);

        return response()->json([
            'message' => 'Formulario para crear MOVIMIENTOS OPERATIVOS!',
            'data' => null,
            'lists' => OperMovement::getLists()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // user_can(['oper_movement.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $operMovement = OperMovement::create($input);

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
            'MOVIMIENTO OPERATIVO almacenado!',
            $operMovement->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\OperMovement $operMovement
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($operMovementId)
    {
        // user_can(['oper_movement.show']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);


        $resource = $operMovement->toArray();
        $resource['lists'] = OperMovement::getLists();

        return $this->responseSuccess(
            'MOVIMIENTOS OPERATIVO obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\OperMovement $operMovement
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($operMovementId)
    {
        // user_can(['oper_movement.edit']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);

        return $this->responseSuccess(
            'Formulario para editar MOVIMIENTO OPERATIVO!',
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
     * @param \App\OperMovement $operMovement
     * @return \Illuminate\Http\JsonResponse
     */
    public function duplicate($operMovementId)
    {
        // user_can(['oper_movement.duplicate']);

        $operMovement = OperMovement::with(OperMovement::getRelationships())->findOrFail($operMovementId);
        $operMovement->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar MOVIMIENTO OPERATIVO!',
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
     * @param \Illuminate\Http\Request $request
     * @param \App\OperMovement $operMovement
     * @return \Illuminate\Http\JsonResponse
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
            'MOVIMIENTO OPERATIVO actualizado!',
            $operMovement->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\OperMovement $operMovement
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($operMovementId)
    {

        // user_can(['oper_movement.destroy']);

        $operMovement = OperMovement::findOrFail($operMovementId);
        $operMovement->delete();
        return $this->responseSuccess(
            'MOVIMIENTO OPERATIVO eliminado!',
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
        foreach ($pivots_data as $pivot_child_model_name => $pivots) {

            $pivotIds = [];
            // remove 'id'
            foreach ($pivots as &$value) {
                if (array_key_exists('id', $value)) {
                    $pivotIds[] = $value['id'];
                    unset($value['id']);
                }
            }
            unset($value);

            $method = Str::camel(Str::plural($pivot_child_model_name));
            $operMovement->$method()->sync($pivotIds);
        }
    }


// end section

    public function operMovements(Request $request)
    {
        $date = date('Y-m-d');

        $operMovements = OperMovement::with(OperMovement::getRelationships());

        if ($request->get('date')) {
            $date = explode(' ', $request->get('date'))[0];
        }

        if ($request->get('oper_sector_id')) {
            $operMovements->where('oper_sector_id', $request->get('oper_sector_id'));
        }

        if ($request->get('oper_contractor_id')) {
            $operMovements->where('oper_contractor_id', $request->get('oper_contractor_id'));
        }

        $operMovements->where('date_statr', $date);

        $movements = $operMovements->get();

        return $this->responseSuccess(
            'OK',
            $movements
        );
    }

    public function movementCheck(Request $request)
    {

        if (!\Auth::user()) {
            return $this->responseError('Su sessión expiró!<br>Por favor ingrese de nuevo!', null, 401);
        }

        $operContractor = OperContractor::where('user_id', \Auth::user()->id)->first();

        if (!$operContractor) {
            return $this->responseError('No esta registrado como contratista!', null, 404);
        }

        $operSector = OperSector::find($request->get('oper_sector_id'));

        if (!$operSector) {
            return $this->responseError('No se encrontó sector operativo!', null, 404);
        }

        $operSchedules = OperSchedule::with(['operMovements' => function ($query) {
            $today = date('Y-m-d');
            return $query->where('date_statr', $today);
        }])
            ->where('oper_contractor_id', $operContractor->id)
            ->where('oper_sector_id', $request->get('oper_sector_id'))->get();

        if (!$operSchedules || !count($operSchedules)) {
            return $this->responseError('No tiene asignadas agendas para ' . $operSector->name . '!');
        }

        $todaySchedules = [];

        $today = date('Y-m-d');

        foreach ($operSchedules->toArray() as $operSchedule) {
            if ($operSchedule['next'] == $today) {
                $todaySchedules[] = $operSchedule;
            }
        }

        if (!count($todaySchedules)) {
            return $this->responseError('No tiene agendas para hoy en ' . $operSector->name . '!');
        }

        return $this->responseSuccess('OK', $todaySchedules);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function movementStart(Request $request): \Illuminate\Http\JsonResponse
    {

        $operSchedule = OperSchedule::find($request->get('oper_schedule_id'));

        try {
            $startMovement = OperMovement::create([
                'name' => $operSchedule->name . ' ' . date('Y-m-d'),
                'oper_sector_id' => $request->get('oper_sector_id'),
                'oper_contractor_id' => $operSchedule->oper_contractor_id,
                'date_statr' => date('Y-m-d'),
                'date_end' => null,
                'time_start' => date('H:i:s'),
                'time_end' => null,
                'time_total' => null,
                'photo' => null,
                'oper_schedule_id' => $operSchedule->id,
                'completed' => false
            ]);

        } catch (\Exception $exception) {
            return $this->responseError('Ocurrio un error!', [
                'message' => $exception->getMessage(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
            ]);
        }

        return $this->responseSuccess('OK', $startMovement);

    }

    public function movementEnd(Request $request)
    {

        $operMovement = OperMovement::find($request->get('oper_movement_id'));

        try {

            $start = new Carbon($operMovement->date_statr . ' ' . $operMovement->time_end);
            $end = new Carbon(date('Y-m-d H:i:s'));

            $diff = $start->diffInSeconds($end);

            $operMovement->update([
                'date_end' => date('Y-m-d'),
                'time_end' => $end,
                'time_total' => ($diff / 3600),
                'photo' => $request->get('photo'),
                'completed' => true
            ]);

        } catch (\Exception $exception) {
            return $this->responseError('Ocurrio un error!', [
                'message' => $exception->getMessage(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
            ]);
        }

    }

}
