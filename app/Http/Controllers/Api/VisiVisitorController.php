<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\VisiVisitor;
use App\Models\VisiVisitorRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class VisiVisitorController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // user_can(['visi_visitor.index']);

        // $visiVisitors = new VisiVisitor;
        $visiVisitors = VisiVisitor::with(VisiVisitor::getRelationships());

        // (1)filltering
        $visiVisitors = $this->filtering($request, $visiVisitors);
        $visiVisitors = $visiVisitors->get();

        // (2)sort
        $visiVisitors = $this->sorting($request, $visiVisitors);

        // (3)paginate
        $visiVisitors = $visiVisitors->paginate($request->get('per_page') ?? 10);

        $resource = $visiVisitors->toArray();

        $resource['lists'] = VisiVisitor::getLists();

        return $this->responseSuccess(
            'Visitantes obtenidos!',
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
        //
        // user_can(['visi_visitor.create']);

        return response()->json([
            'message' => 'Formulario para crear visitantes!',
            'data' => null,
            'lists' => VisiVisitor::getLists()
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
        // user_can(['visi_visitor.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $visiVisitor = VisiVisitor::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $visiVisitor);
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
            'Visitante almacenado!',
            $visiVisitor->toArray(),
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
        // user_can(['visi_visitor.show']);

        $visiVisitor = VisiVisitor::with(VisiVisitor::getRelationships())->findOrFail($id);

        $resource = $visiVisitor->toArray();
        $resource['lists'] = VisiVisitor::getLists();

        return $this->responseSuccess(
            'Visitante obtenido!',
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
        // user_can(['visi_visitor.edit']);

        $visiVisitor = VisiVisitor::with(VisiVisitor::getRelationships())->findOrFail($id);

        return $this->responseSuccess(
            'Formulario para editar visitantes!',
            [
                'model' => $visiVisitor,
                'lists' => VisiVisitor::getLists(),
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
        //
        // user_can(['visi_visitor.update']);

        $visiVisitor = VisiVisitor::findOrFail($id);

        $this->varidate($request, $visiVisitor);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $visiVisitor->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $visiVisitor);
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
            'Visitante actualizado!',
            $visiVisitor->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param \App\CounMeeting $counMeeting * @return \Illuminate\Http\Response
     */
    public function duplicate($id)
    {
        // user_can(['visi_visitor.duplicate']);

        $visiVisitor = VisiVisitor::with(VisiVisitor::getRelationships())->findOrFail($id);
        $visiVisitor->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar visitantes!',
            [
                'model' => $visiVisitor,
                'lists' => VisiVisitor::getLists(),
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
        //
        // user_can(['visi_visitor.destroy']);

        DB::beginTransaction();
        try {
            VisiVisitorRegister::where('visi_visitor_id', $id)->delete();
            $visiVisitor = VisiVisitor::findOrFail($id);
            $visiVisitor->delete();

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
            'Visitante eliminado!',
            $visiVisitor->toArray(),
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
    public function varidate(Request $request, VisiVisitor $visiVisitor = null)
    {
        $request->validate(VisiVisitor::getValidateRule($visiVisitor));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, VisiVisitor $visiVisitor)
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
            $visiVisitor->$method()->sync($pivotIds);
        }
    }

    public function userAddVisitor(Request $request)
    {

    }
}
