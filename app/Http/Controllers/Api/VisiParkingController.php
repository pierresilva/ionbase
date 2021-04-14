<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\VisiVisitorRegister;
use DB;
use Illuminate\Http\Request;
use App\Models\VisiParking;

class VisiParkingController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // user_can(['visi_parkings.index']);

        // $visiParkings = new VisiParking;
        $visiParkings = VisiParking::with(VisiParking::getRelationships());

        // (1)filltering
        $visiParkings = $this->filtering($request, $visiParkings);
        $visiParkings = $visiParkings->get();

        // (2)sort
        $visiParkings = $this->sorting($request, $visiParkings);

        // (3)paginate
        $visiParkings = $visiParkings->paginate($request->get('perPage') ?? 10);

        $resource = $visiParkings->toArray();

        $resource['lists'] = VisiParking::getLists();

        return $this->responseSuccess(
            'Parqueaderos obtenidos!',
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
        // user_can(['visi_parkings.create']);

        return response()->json([
            'message' => 'Formulario para crear parqueadero!',
            'data' => null,
            'lists' => VisiParking::getLists()
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
        // user_can(['visi_visitor.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            $input['code'] = \Str::slug($input['name']);
            $input['available'] = true;
            //create data
            $visiParking = VisiParking::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $visiParking);
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
            'Parqueadero almacenado!',
            $visiParking->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\VisiParking $visiParking
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // user_can(['visi_parkings.show']);

        $visiParking = VisiParking::with(VisiParking::getRelationships())->findOrFail($id);

        $resource = $visiParking->toArray();
        $resource['lists'] = VisiParking::getLists();

        return $this->responseSuccess(
            'Parqueadero obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\VisiParking $visiParking
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        // user_can(['visi_parkings.edit']);

        $visiParking = VisiParking::with(VisiParking::getRelationships())->findOrFail($id);

        return $this->responseSuccess(
            'Formulario para editar parqueadero!',
            [
                'model' => $visiParking,
                'lists' => VisiParking::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // user_can(['visi_parking.update']);

        $visiParking = VisiParking::findOrFail($id);

        $this->varidate($request, $visiParking);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $visiParking->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $visiParking);
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
            'Parqueadero actualizado!',
            $visiParking->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function duplicate($id)
    {
        // user_can(['visi_visitor.duplicate']);

        $visiParking = VisiParking::with(VisiParking::getRelationships())->findOrFail($id);
        $visiParking->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar visitantes!',
            [
                'model' => $visiParking,
                'lists' => VisiParking::getLists(),
            ],
            false
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\VisiParking $visiParking
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // user_can(['visi_parkings.destroy']);

        DB::beginTransaction();
        try {
            $register = VisiVisitorRegister::where('visi_parking_id', $id)->first();

            if ($register) {
                return $this->responseError(
                    '' . 'Existen registros de visitantes con este parqueadero!',
                    [
                        'message' => 'Existen registros con este parqueadero!',
                    ]
                );
            }

            $visiParking = VisiParking::findOrFail($id);
            $visiParking->delete();

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
            'Parqueadero eliminado!',
            $visiParking->toArray(),
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
    public function varidate(Request $request, VisiParking $visiParking = null)
    {
        $request->validate(VisiParking::getValidateRule($visiParking));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, VisiParking $visiParking)
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

            $method = \Str::camel(\Str::plural($pivot_child_model_name) );
            $visiParking->$method()->sync($pivotIds);
        }
    }
}
