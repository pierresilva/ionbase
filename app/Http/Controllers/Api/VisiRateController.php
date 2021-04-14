<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\VisiRate;
use Illuminate\Http\Request;

class VisiRateController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // user_can(['visi-rate.index']);

        // $visiRates = new VisiRate;
        $visiRates = VisiRate::with(VisiRate::getRelationships());

        // (1)filltering
        $visiRates = $this->filtering($request, $visiRates);
        $visiRates = $visiRates->get();

        // (2)sort
        $visiRates = $this->sorting($request, $visiRates);

        // (3)paginate
        $visiRates = $visiRates->paginate($request->get('perPage') ?? 10);

        $resource = $visiRates->toArray();

        $resource['lists'] = VisiRate::getLists();

        return $this->responseSuccess(
            'Tarifas obtenidos!',
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
        // user_can(['visi-rates.create']);

        return response()->json([
            'message' => 'Formulario para crear tarifas!',
            'data' => null,
            'lists' => VisiRate::getLists()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // user_can(['visi-rates.store']);

        $this->varidate($request);

        $input = $request->input('model');


        \DB::beginTransaction();
        try {
            $input['code'] = \Str::slug($input['name']);
            //create data
            $visiRate = VisiRate::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $visiRate);
            }

        } catch (\Exception $exception) {
            \DB::rollBack();
            return $this->responseError(
                '' . $exception->getMessage(),
                [
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]
            );
        }
        \DB::commit();

        return $this->responseSuccess(
            'Tarifa almacenado!',
            $visiRate->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // user_can(['visi-rates.show']);

        $visiRate = VisiRate::with(VisiRate::getRelationships())->findOrFail($id);

        $resource = $visiRate->toArray();
        $resource['lists'] = VisiRate::getLists();

        return $this->responseSuccess(
            'Tarifa obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        // user_can(['visi-rates.edit']);

        $visiRate = VisiRate::with(VisiRate::getRelationships())->findOrFail($id);

        return $this->responseSuccess(
            'Formulario para editar tarifa!',
            [
                'model' => $visiRate,
                'lists' => VisiRate::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // user_can(['visi-rates.update']);

        $visiRate = VisiRate::findOrFail($id);

        $this->varidate($request, $visiRate);

        $input = $request->input('model');


        \DB::beginTransaction();
        try {
            //update data
            $visiRate->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $visiRate);
            }

        } catch (\Exception $exception) {
            \DB::rollBack();
            return $this->responseError(
                '' . $exception->getMessage(),
                [
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]
            );
        }
        \DB::commit();

        return $this->responseSuccess(
            'Tarifa actualizado!',
            $visiRate->toArray(),
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
        // user_can(['visi-rates.duplicate']);

        $visiRate = VisiRate::with(VisiRate::getRelationships())->findOrFail($id);
        $visiRate->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar tarifa!',
            [
                'model' => $visiRate,
                'lists' => VisiRate::getLists(),
            ],
            false
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // user_can(['visi-rates.destroy']);

        \DB::beginTransaction();
        try {

            $visiRate = VisiRate::findOrFail($id);
            $visiRate->delete();

        } catch (\Exception $exception) {
            \DB::rollBack();
            return $this->responseError(
                '' . $exception->getMessage(),
                [
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]
            );
        }
        \DB::commit();

        return $this->responseSuccess(
            'Tarifa eliminado!',
            $visiRate->toArray(),
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
    public function varidate(Request $request, VisiRate $visiRate = null)
    {
        $request->validate(VisiRate::getValidateRule($visiRate));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, VisiRate $visiRate)
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
            $visiRate->$method()->sync($pivotIds);
        }
    }
}
