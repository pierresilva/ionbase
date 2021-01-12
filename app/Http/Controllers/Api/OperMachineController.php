<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperMachine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperMachineController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_machine.index']);

        // $operMachines = new OperMachine;
        $operMachines = OperMachine::with(OperMachine::getRelationships());

        // (1)filltering
        $operMachines = $this->filtering($request, $operMachines);
        $operMachines = $operMachines->get();

        // (2)sort
        $operMachines = $this->sorting($request, $operMachines);

        // (3)paginate
        $operMachines = $operMachines->paginate($request->get('per_page') ?? 10);

        $resource = $operMachines->toArray();

        $resource['lists'] = OperMachine::getLists();

        return $this->responseSuccess(
            'OPERATIVIDADMAQUINARIUM obtenidos!',
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
        // user_can(['oper_machine.create']);

        return response()->json([
            'message' => 'Formulario para OPERATIVIDADMAQUINARIUM obtenido!',
            'data' => null,
            'lists' => OperMachine::getLists()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // user_can(['oper_machine.store']);

        $this->varidate($request);

        $input = $request->input('model');

        DB::beginTransaction();
        try {
            //create data
            $operMachine = OperMachine::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $operMachine);
            }

            if (isset($input['oper_preventive_maintenances']) && count($input['oper_preventive_maintenances'])) {
                foreach ($input['oper_preventive_maintenances'] as $operPreventiveMaintenance) {
                    \App\Models\OperPreventiveMaintenance::find($operPreventiveMaintenance['id'])->update(['oper_machine_id' => $operMachine->id]);
                }
            }
            if (isset($input['oper_replacements']) && count($input['oper_replacements'])) {
                foreach ($input['oper_replacements'] as $operReplacement) {
                    \App\Models\OperReplacement::find($operReplacement['id'])->update(['oper_machine_id' => $operMachine->id]);
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
            'OPERATIVIDADMAQUINARIUM almacenado!',
            $operMachine->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\OperMachine $operMachine * @return \Illuminate\Http\Response
     */
    public function show($operMachineId)
    {
        // user_can(['oper_machine.show']);

        $operMachine = OperMachine::with(OperMachine::getRelationships())->findOrFail($operMachineId);

        $operMachine->oper_preventive_maintenance_ids = collect($operMachine->operPreventiveMaintenances)->pluck('id');
        $operMachine->oper_replacement_ids = collect($operMachine->operReplacements)->pluck('id');

        $resource = $operMachine->toArray();
        $resource['lists'] = OperMachine::getLists();

        return $this->responseSuccess(
            'OPERATIVIDADMAQUINARIUM obtenidos!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\OperMachine $operMachine * @return \Illuminate\Http\Response
     */
    public function edit($operMachineId)
    {
        // user_can(['oper_machine.edit']);

        $operMachine = OperMachine::with(OperMachine::getRelationships())->findOrFail($operMachineId);
        $operMachine->oper_preventive_maintenance_ids = collect($operMachine->operPreventiveMaintenances)->pluck('id');
        $operMachine->oper_replacement_ids = collect($operMachine->operReplacements)->pluck('id');

        return $this->responseSuccess(
            'Formulario para OPERATIVIDADMAQUINARIUM obtenidos!',
            [
                'model' => $operMachine,
                'lists' => OperMachine::getLists(),
            ],
            false
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param \App\OperMachine $operMachine * @return \Illuminate\Http\Response
     */
    public function duplicate($operMachineId)
    {
        // user_can(['oper_machine.duplicate']);

        $operMachine = OperMachine::with(OperMachine::getRelationships())->findOrFail($operMachineId);
        $operMachine->id = null;
        $operMachine->oper_preventive_maintenance_ids = collect($operMachine->operPreventiveMaintenances)->pluck('id');
        $operMachine->oper_replacement_ids = collect($operMachine->operReplacements)->pluck('id');

        return $this->responseSuccess(
            'Formulario para OPERATIVIDADMAQUINARIUM obtenidos!',
            [
                'model' => $operMachine,
                'lists' => OperMachine::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\OperMachine $operMachine * @return \Illuminate\Http\Response
     */
    public function update($operMachineId, Request $request)
    {

        // user_can(['oper_machine.update']);

        $operMachine = OperMachine::findOrFail($operMachineId);

        $this->varidate($request, $operMachine);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $operMachine->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $operMachine);
            }

            if (isset($input['oper_preventive_maintenances']) && count($input['oper_preventive_maintenances'])) {
                \App\Models\OperPreventiveMaintenance::where('oper_machine_id', $operMachineId)
                    ->update(['oper_machine_id' => null]);
                foreach ($input['oper_preventive_maintenances'] as $operPreventiveMaintenance) {
                    \App\Models\OperPreventiveMaintenance::find($operPreventiveMaintenance['id'])->update(['oper_machine_id' => $operMachine->id]);
                }
            }
            if (isset($input['oper_replacements']) && count($input['oper_replacements'])) {
                \App\Models\OperReplacement::where('oper_machine_id', $operMachineId)
                    ->update(['oper_machine_id' => null]);
                foreach ($input['oper_replacements'] as $operReplacement) {
                    \App\Models\OperReplacement::find($operReplacement['id'])->update(['oper_machine_id' => $operMachine->id]);
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
            'OPERATIVIDADMAQUINARIUM actualizado!',
            $operMachine->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\OperMachine $operMachine * @return \Illuminate\Http\Response
     */
    public function destroy($operMachineId)
    {

        // user_can(['oper_machine.destroy']);

        $operMachine = OperMachine::findOrFail($operMachineId);
        $operMachine->delete();
        return $this->responseSuccess(
            'OPERATIVIDADMAQUINARIUM eliminado!',
            $operMachine->toArray(),
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
    public function varidate(Request $request, OperMachine $operMachine = null)
    {
        $request->validate(OperMachine::getValidateRule($operMachine));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperMachine $operMachine)
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
            $operMachine->$method()->sync($pivotIds);
        }
    }

// end section

}
