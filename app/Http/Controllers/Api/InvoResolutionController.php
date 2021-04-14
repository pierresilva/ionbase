<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\InvoResolution;
use Illuminate\Http\Request;
use Str;
use DB;

class InvoResolutionController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // user_can(['invo_resolution.index']);

        // $invoResolutions = new InvoInvoice;
        $invoResolutions = InvoResolution::with(InvoResolution::getRelationships());

        // (1)filltering
        $invoResolutions = $this->filtering($request, $invoResolutions);
        $invoResolutions = $invoResolutions->get();

        // (2)sort
        $invoResolutions = $this->sorting($request, $invoResolutions);

        // (3)paginate
        if (!$request->get('all')) {
            $invoResolutions = $invoResolutions->paginate($request->get('perPage') ?? 10);
        } else {
            $invoResolutions = $invoResolutions->get();
        }

        $resource = $invoResolutions->toArray();

        $resource['lists'] = InvoResolution::getLists();

        return $this->responseSuccess(
            'Resoluciones obtenidas!',
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
        // user_can(['invo_resolution.create']);
        return response()->json([
            'message' => 'Formulario para crear resoluciones!',
            'data' => null,
            'lists' => InvoResolution::getLists()
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
        //
        $this->varidate($request);
        $input = $request->input('model');

        DB::beginTransaction();
        try {
            //create data
            $input['current_number'] = $request->get('current_number') ?? 1;
            $boarMessage = InvoResolution::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $boarMessage);
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
            'Resolución almacenada!',
            $boarMessage->toArray(),
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
        //
        // user_can(['invo_resolution.show']);

        $invoResolution = InvoResolution::with(InvoResolution::getRelationships())->findOrFail($id);

        $resource = $invoResolution->toArray();
        $resource['lists'] = InvoResolution::getLists();

        return $this->responseSuccess(
            'Resolución obtenido!',
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
        //
        // user_can(['invo_resolution.edit']);
        $invoResolution = InvoResolution::with(InvoResolution::getRelationships())->find($id);
        return response()->json([
            'message' => 'Formulario para crear resoluciones!',
            'data' => $invoResolution,
            'lists' => InvoResolution::getLists()
        ]);
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
        // user_can(['invo_resolution.update']);
        $invoResolution = InvoResolution::with(InvoResolution::getRelationships())->find($id);

        $this->varidate($request, $invoResolution);

        $input = $request->input('model');

        DB::beginTransaction();
        try {
            //update data
            $invoResolution->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $invoResolution);
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
            'Entrada de la cartelera actualizado!',
            $invoResolution->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, InvoResolution $invoResolution = null)
    {
        $request->validate(InvoResolution::getValidateRule($invoResolution));
    }


    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivotsData, InvoResolution $invoResolution)
    {
        foreach ($pivotsData as $pivotChildModelName => $pivots) {

            $pivotIds = [];
            // remove 'id'
            foreach ($pivots as &$value) {
                if (array_key_exists('id', $value)) {
                    $pivotIds[] = $value['id'];
                    unset($value['id']);
                }
            }
            unset($value);

            $method = Str::camel(Str::plural($pivotChildModelName));
            $invoResolution->$method()->sync($pivotIds);
        }
    }
}
