<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperScheduleController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_schedule.index']);

		// $operSchedules = new OperSchedule;
	    $operSchedules = OperSchedule::with(OperSchedule::getRelationships());

		// (1)filltering
        $operSchedules = $this->filtering($request, $operSchedules);
        $operSchedules = $operSchedules->get();

        // (2)sort
        $operSchedules = $this->sorting($request, $operSchedules);

        // (3)paginate
        $operSchedules = $operSchedules->paginate($request->get('per_page') ?? 10);

        $resource = $operSchedules->toArray();

        $resource['lists'] = OperSchedule::getLists();

        return $this->responseSuccess(
          'AGENDADEOPERACIONE obtenidos!',
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
        // user_can(['oper_schedule.create']);

            return response()->json([
              'message' => 'Formulario para crear AGENDADEOPERACIONE!',
              'data' => null,
              'lists' => OperSchedule::getLists()
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
        // user_can(['oper_schedule.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $operSchedule = OperSchedule::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operSchedule);
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
          'AGENDADEOPERACIONE almacenado!',
          $operSchedule->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function show($operScheduleId)
    {
        // user_can(['oper_schedule.show']);

        $operSchedule = OperSchedule::with(OperSchedule::getRelationships())->findOrFail($operScheduleId);

                                                        
        $resource = $operSchedule->toArray();
        $resource['lists'] = OperSchedule::getLists();

        return $this->responseSuccess(
          'AGENDADEOPERACIONE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function edit($operScheduleId)
    {
        // user_can(['oper_schedule.edit']);

        $operSchedule = OperSchedule::with(OperSchedule::getRelationships())->findOrFail($operScheduleId);
                                                        
        return $this->responseSuccess(
          'Formulario para editar AGENDADEOPERACIONE!',
          [
            'model' => $operSchedule,
            'lists' => OperSchedule::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperSchedule  $operSchedule	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operScheduleId)
	{
        // user_can(['oper_schedule.duplicate']);

        $operSchedule = OperSchedule::with(OperSchedule::getRelationships())->findOrFail($operScheduleId);
        $operSchedule->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para duplicar AGENDADEOPERACIONE!',
          [
            'model' => $operSchedule,
            'lists' => OperSchedule::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function update($operScheduleId, Request $request)
    {

        // user_can(['oper_schedule.update']);

        $operSchedule = OperSchedule::findOrFail($operScheduleId);

        $this->varidate($request, $operSchedule);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $operSchedule->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operSchedule);
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
          'AGENDADEOPERACIONE actualizado!',
          $operSchedule->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperSchedule  $operSchedule     * @return \Illuminate\Http\Response
     */
    public function destroy($operScheduleId)
    {

        // user_can(['oper_schedule.destroy']);

        $operSchedule = OperSchedule::findOrFail($operScheduleId);
        $operSchedule->delete();
        return $this->responseSuccess(
          'AGENDADEOPERACIONE eliminado!',
          $operSchedule->toArray(),
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
    public function varidate(Request $request, OperSchedule $operSchedule = null)
    {
        $request->validate(OperSchedule::getValidateRule($operSchedule));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperSchedule $operSchedule)
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
            $operSchedule->$method()->sync($pivotIds);
        }
    }


// end section

}
