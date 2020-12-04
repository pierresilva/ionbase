<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CounMeetingAgenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMeetingAgendaController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['coun_meeting_agenda.index']);

		// $counMeetingAgendas = new CounMeetingAgenda;
	    $counMeetingAgendas = CounMeetingAgenda::with(CounMeetingAgenda::getRelationships());

		// (1)filltering
        $counMeetingAgendas = $this->filtering($request, $counMeetingAgendas);
        $counMeetingAgendas = $counMeetingAgendas->get();

        // (2)sort
        $counMeetingAgendas = $this->sorting($request, $counMeetingAgendas);

        // (3)paginate
        $counMeetingAgendas = $counMeetingAgendas->paginate($request->get('per_page') ?? 10);

        $resource = $counMeetingAgendas->toArray();

        $resource['lists'] = CounMeetingAgenda::getLists();

        return $this->responseSuccess(
          'JUNTASAGENDA obtenidos!',
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
        // user_can(['coun_meeting_agenda.create']);

            return response()->json([
              'message' => 'Formulario para crear JUNTASAGENDA!',
              'data' => null,
              'lists' => CounMeetingAgenda::getLists()
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
        // user_can(['coun_meeting_agenda.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //create data
          $counMeetingAgenda = CounMeetingAgenda::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $counMeetingAgenda);
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
          'JUNTASAGENDA almacenado!',
          $counMeetingAgenda->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function show($counMeetingAgendaId)
    {
        // user_can(['coun_meeting_agenda.show']);

        $counMeetingAgenda = CounMeetingAgenda::with(CounMeetingAgenda::getRelationships())->findOrFail($counMeetingAgendaId);

                                
        $resource = $counMeetingAgenda->toArray();
        $resource['lists'] = CounMeetingAgenda::getLists();

        return $this->responseSuccess(
          'JUNTASAGENDA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function edit($counMeetingAgendaId)
    {
        // user_can(['coun_meeting_agenda.edit']);

        $counMeetingAgenda = CounMeetingAgenda::with(CounMeetingAgenda::getRelationships())->findOrFail($counMeetingAgendaId);
                                
        return $this->responseSuccess(
          'Formulario para editar JUNTASAGENDA!',
          [
            'model' => $counMeetingAgenda,
            'lists' => CounMeetingAgenda::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CounMeetingAgenda  $counMeetingAgenda	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($counMeetingAgendaId)
	{
        // user_can(['coun_meeting_agenda.duplicate']);

        $counMeetingAgenda = CounMeetingAgenda::with(CounMeetingAgenda::getRelationships())->findOrFail($counMeetingAgendaId);
        $counMeetingAgenda->id = null;
                                
        return $this->responseSuccess(
          'Formulario para duplicar JUNTASAGENDA!',
          [
            'model' => $counMeetingAgenda,
            'lists' => CounMeetingAgenda::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function update($counMeetingAgendaId, Request $request)
    {

        // user_can(['coun_meeting_agenda.update']);

        $counMeetingAgenda = CounMeetingAgenda::findOrFail($counMeetingAgendaId);

        $this->varidate($request, $counMeetingAgenda);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //update data
          $counMeetingAgenda->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $counMeetingAgenda);
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
          'JUNTASAGENDA actualizado!',
          $counMeetingAgenda->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMeetingAgenda  $counMeetingAgenda     * @return \Illuminate\Http\Response
     */
    public function destroy($counMeetingAgendaId)
    {

        // user_can(['coun_meeting_agenda.destroy']);

        $counMeetingAgenda = CounMeetingAgenda::findOrFail($counMeetingAgendaId);
        $counMeetingAgenda->delete();
        return $this->responseSuccess(
          'JUNTASAGENDA eliminado!',
          $counMeetingAgenda->toArray(),
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
    public function varidate(Request $request, CounMeetingAgenda $counMeetingAgenda = null)
    {
        $request->validate(CounMeetingAgenda::getValidateRule($counMeetingAgenda));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeetingAgenda $counMeetingAgenda)
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
            $counMeetingAgenda->$method()->sync($pivotIds);
        }
    }


// end section

}
