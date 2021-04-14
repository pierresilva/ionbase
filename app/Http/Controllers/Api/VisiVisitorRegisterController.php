<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\HousUnit;
use App\Models\InvoInvoice;
use App\Models\InvoInvoiceProduct;
use App\Models\InvoResolution;
use App\Models\SettingGroup;
use App\Models\User;
use App\Models\VisiParking;
use App\Models\VisiVisitor;
use App\Models\VisiVisitorRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use mysql_xdevapi\Exception;
use PharIo\Manifest\ElementCollectionException;

class VisiVisitorRegisterController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        //
        // user_can(['visi_visitor_register.index']);

        // $visiVisitorRegisters = new VisiVisitorRegister;
        $visiVisitorRegisters = VisiVisitorRegister::with(VisiVisitorRegister::getRelationships());

        // (1)filltering
        $visiVisitorRegisters = $this->filtering($request, $visiVisitorRegisters);
        $visiVisitorRegisters = $visiVisitorRegisters->get();

        // (2)sort
        $visiVisitorRegisters = $this->sorting($request, $visiVisitorRegisters);

        // (3)paginate
        if (!$request->get('all')) {
            $visiVisitorRegisters = $visiVisitorRegisters->paginate($request->get('perPage') ?? 10);
        } else {
            $visiVisitorRegisters = $visiVisitorRegisters->get();
        }

        $resource = $visiVisitorRegisters->toArray();

        $resource['lists'] = VisiVisitorRegister::getLists();

        return $this->responseSuccess(
            'Registros de Visitantes obtenidos!',
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
        // user_can(['visi_visitor_register.create']);

        return response()->json([
            'message' => 'Formulario para crear registro de visitantes!',
            'data' => null,
            'lists' => VisiVisitorRegister::getLists()
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
        //
        // user_can(['visi_visitor_register.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $visiVisitorRegister = VisiVisitorRegister::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $visiVisitorRegister);
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
            'Registro de Visitante almacenado!',
            $visiVisitorRegister->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        // user_can(['visi_visitor_register.show']);

        $visiVisitorRegister = VisiVisitorRegister::with(VisiVisitorRegister::getRelationships())->findOrFail($id);

        $resource = $visiVisitorRegister->toArray();
        $resource['lists'] = VisiVisitorRegister::getLists();

        return $this->responseSuccess(
            'Registro de Visitante obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // user_can(['visi_visitor_register.edit']);

        $visiVisitorRegister = VisiVisitorRegister::with(VisiVisitorRegister::getRelationships())->findOrFail($id);

        return $this->responseSuccess(
            'Formulario para editar visitantes!',
            [
                'model' => $visiVisitorRegister,
                'lists' => VisiVisitorRegister::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // user_can(['visi_visitor_register.update']);

        $visiVisitorRegister = VisiVisitorRegister::findOrFail($id);

        $this->varidate($request, $visiVisitorRegister);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $visiVisitorRegister->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $visiVisitorRegister);
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
            'Registro de Visitante actualizado!',
            $visiVisitorRegister->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function duplicate($id)
    {
        // user_can(['visi_visitor_register.duplicate']);

        $visiVisitorRegister = VisiVisitorRegister::with(VisiVisitorRegister::getRelationships())->findOrFail($id);
        $visiVisitorRegister->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar registro de visitantes!',
            [
                'model' => $visiVisitorRegister,
                'lists' => VisiVisitorRegister::getLists(),
            ],
            false
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // user_can(['visi_visitor_register.destroy']);

        $visiVisitorRegister = VisiVisitorRegister::findOrFail($id);
        $visiVisitorRegister->delete();
        return $this->responseSuccess(
            'Registro de Visitante eliminado!',
            $visiVisitorRegister->toArray(),
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
    public function varidate(Request $request, VisiVisitorRegister $visiVisitorRegister = null)
    {
        $request->validate(VisiVisitorRegister::getValidateRule($visiVisitorRegister));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, VisiVisitorRegister $visiVisitorRegister)
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
            $visiVisitorRegister->$method()->sync($pivotIds);
        }
    }

    public function entry(Request $request, $registerId)
    {

        if(!$registerId) {
            DB::beginTransaction();
            try {

                $visitor = VisiVisitor::with('user')->find($request->get('visi_visitor_id'));

                $housUnit = HousUnit::where('contact_email', $visitor->user->email)->first();

                $visitorRegister = VisiVisitorRegister::create([
                    'entry_date' => date('Y-m-d H:i:s'),
                    'visi_visitor_id' => $request->get('visi_visitor_id'),
                    'hous_unit_id' => $housUnit->id,
                ]);
            } catch (\Exception $exception) {
                DB::rollBack();
                return $this->responseError($exception->getMessage());
            }
            DB::commit();
        } else {
            $visitorRegister = VisiVisitorRegister::find($registerId);
        }

        // return $this->responseError('KO', $visitorRegister->toArray());

        if ($visitorRegister->departure_date) {
            DB::beginTransaction();
            try {

                $visitorRegister = VisiVisitorRegister::create([
                    'entry_date' => date('Y-m-d H:i:s'),
                    'visi_visitor_id' => $visitorRegister->visi_visitor_id,
                    'hous_unit_id' => $visitorRegister->hous_unit_id,
                ]);

                // return $this->responseError('KO', $visitorRegister->toArray());

            } catch (\Exception $exception) {
                DB::rollBack();
                return $this->responseError($exception->getMessage());
            }
            DB::commit();
        }

        DB::beginTransaction();
        try {
            $visitorRegister->update([
                // 'hous_unit_id' => $request->get('hous_unit_id'),
                'entry_date' => date('Y-m-d H:i:s'),
                'visi_vehicle_type_id' => $request->get('visi_vehicle_type_id'),
                'visi_rate_id' => $request->get('visi_rate_id'),
                'license_plate' => $request->get('license_plate'),
                'visi_parking_id' => $request->get('visi_parking_id'),
            ]);

            $visitor = VisiVisitor::find($visitorRegister->visi_visitor_id);

            $visitor->update([
                'entry_status' => 'in'
            ]);

            if ($request->get('visi_parking_id')) {
                $visiParking = VisiParking::find($request->get('visi_parking_id'));
                $visiParking->update([
                    'available' => false
                ]);
            }

        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();

        return $this->responseSuccess(
            'Ingreso exitoso!',
            $visitorRegister->toArray()
        );
    }

    /**
     * @throws \Throwable
     */
    public function exit(Request $request, $registerId)
    {

        $visitorRegister = VisiVisitorRegister::with('visiVisitor', 'visiVehicleType', 'visiRate')
            ->find($registerId);

        if (!$visitorRegister) {
            return $this->responseError('No se encontró el registro del visitante');
        }

        $invoiceData = null;
        $invoicing = false;

        $invoicingSettings = SettingGroup::with('settings')
            ->where('code', 'facturacion')
            ->first();

        foreach ($invoicingSettings->settings as $setting) {
            if ($setting->code == 'facturacion.facturar') {
                if ($setting->value == 'si') {
                    $invoicing = true;
                }
            }
        }

        if ($invoicing) {
            // todo: get data to invoice. resoluciones DIAN, # factura
        }

        DB::beginTransaction();
        try {

            $totalMinutes = null;

            if ($visitorRegister->visi_rate_id) {

                $resolution = InvoResolution::where('date_from', '<=', now()->toDateString())
                    ->where('date_to', '>=', now()->toDateString())
                    ->whereColumn('current_number', '<=', 'final')
                    ->first();

                $invoiceData = [
                    'invo_resolution_id' => $resolution->id,
                    'visi_visitor_id' => $visitorRegister->visi_visitor_id,
                    'visi_visitor_register_id' => $visitorRegister->id,
                    'firstname' => explode(' ', $visitorRegister->visiVisitor->full_name)[0],
                    'lastname' => explode(' ', $visitorRegister->visiVisitor->full_name)[1],
                    'document_type' => 'CC',
                    'document' => $visitorRegister->visiVisitor->identification,
                    'date' => date('Y-m-d'),
                    'total' => null,
                    'IVA' => null,
                    'observations' => null,
                    'resolution' => $resolution,
                    'number' => $resolution ? $resolution->current_number : null,
                    'register' => $visitorRegister,
                ];

                $date1 = new \DateTime($visitorRegister->entry_date);
                $date2 = new \DateTime(date('Y-m-d H:i:s'));
                $interval = $date1->diff($date2);
                $diffHours = $interval->format('%h');
                $diffMinutes = $interval->format('%i');

                $totalMinutes = ((int)$diffHours * 60) + (int)$diffMinutes;

                $invoiceData['total'] = $totalMinutes * $visitorRegister->visiRate->value;
                $invoiceData['products'][] = [
                    'product' => $visitorRegister->visiRate->name . ' (mins)',
                    'quantity' => $totalMinutes,
                    'subtotal' => $totalMinutes * $visitorRegister->visiRate->value,
                ];

                $invoice = InvoInvoice::create($invoiceData);
                $invoiceData['products'][0]['invo_invoice_id'] = $invoice->id;
                InvoInvoiceProduct::create($invoiceData['products'][0]);

                if ($resolution) {
                    $resolution->update([
                        'current_number' => $resolution->current_number++
                    ]);
                }

            }

            $visitorRegister->update([
                // 'hous_unit_id' => $request->get('hous_unit_id'),
                'departure_date' => date('Y-m-d H:i:s'),
                'total_minutes' => $totalMinutes,
            ]);

            $visitor = VisiVisitor::find($visitorRegister->visi_visitor_id);

            $invoiceData['visitor'] = $visitor;

            $visitor->update([
                'entry_status' => 'out'
            ]);

            if ($visitorRegister->visi_parking_id) {
                $visiParking = VisiParking::find($visitorRegister->visi_parking_id);
                $visiParking->update([
                    'available' => true
                ]);
            }

        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage(), [
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
            ]);
        }
        DB::commit();

        return $this->responseSuccess(
            'Salida exitosa!',
            $invoiceData,
            false
        );
    }

    public function new(Request $request) {

        // return $this->responseError('KO', $request->all());

        $validator = Validator::make($request->all(), [
            'register_hous_unit_id' => 'required',
            'visitor_full_name' => 'required',
            'visitor_document' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseError('Existen errores en el formulario', $validator->errors());
        }

        $register = null;

        $visitorExists = VisiVisitor::with('user')->where('identification', $request->get('visitor_document'))->first();

        if (!$visitorExists) {
            DB::beginTransaction();
            try {

                $hosUnit = HousUnit::find($request->get('register_hous_unit_id'));

                $user = User::where('email', $hosUnit->contact_email)->first();

                $visitor = VisiVisitor::create([
                    'identification' => $request->get('visitor_document'),
                    'full_name' => $request->get('visitor_full_name'),
                    'phone' => $request->get('visitor_phone'),
                    'email' => $request->get('visitor_email'),
                    'user_id' => $user ? $user->id : auth()->user()->id,
                    'hous_unit_id' => $request->get('register_hous_unit_id'),
                    'entry_status' => null,
                ]);

                $visitor->update([
                    'entry_status' => 'in'
                ]);

                $register = VisiVisitorRegister::create([
                    'visi_visitor_id' => $visitor->id,
                    'hous_unit_id' => $request->get('register_hous_unit_id'),
                    'entry_date' => date('Y-m-d H:i:s'),
                    'approved_by' => $user ? $user->name : auth()->user()->name,
                    'visi_vehicle_type_id' => $request->get('register_vehicle_type_id'),
                    'visi_rate_id' => $request->get('register_visi_rate_id'),
                    'license_plate' => $request->get('register_license_plate'),
                    'visi_parking_id' => $request->get('register_visi_parking_id')
                ]);

            } catch (\Exception $exception) {
                DB::rollBack();
                return $this->responseError($exception->getMessage(), [
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]);
            }
            DB::commit();
        }

        if ($visitorExists) {
            DB::beginTransaction();
            try {
                $register = VisiVisitorRegister::create([
                    'visi_visitor_id' => $visitorExists->id,
                    'hous_unit_id' => $request->get('register_hous_unit_id'),
                    'entry_date' => date('Y-m-d H:i:s'),
                    'visi_vehicle_type_id' => $request->get('register_vehicle_type_id'),
                    'visi_rate_id' => $request->get('register_visi_rate_id'),
                    'license_plate' => $request->get('register_license_plate'),
                    'visi_parking_id' => $request->get('register_visi_parking_id'),
                ]);
                $visitorExists->update([
                    'entry_status' => 'in'
                ]);
            } catch (\Exception $exception) {
                DB::rollBack();
                return $this->responseError($exception->getMessage(), [
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]);
            }
            DB::commit();

        }

        if ($request->get('register_visi_parking_id')) {
            DB::beginTransaction();
            try {
                $parking = VisiParking::find($request->get('register_visi_parking_id'));
                $parking->update([
                    'available' => false
                ]);
            } catch (\Exception $exception) {
                DB::rollBack();
                return $this->responseError($exception->getMessage(), [
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]);
            }
            DB::commit();
        }

        return $this->responseSuccess('Se creo el registro con éxito!', $register->toArray());

    }
}
