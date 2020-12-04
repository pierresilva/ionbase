<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CounMeeting;
use App\Models\CounMeetingCitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMeetingCitationController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['coun_meeting_citation.index']);

        // $counMeetingCitations = new CounMeetingCitation;
        $counMeetingCitations = CounMeetingCitation::with(CounMeetingCitation::getRelationships());

        // (1)filltering
        $counMeetingCitations = $this->filtering($request, $counMeetingCitations);
        $counMeetingCitations = $counMeetingCitations->get();

        // (2)sort
        $counMeetingCitations = $this->sorting($request, $counMeetingCitations);

        // (3)paginate
        $counMeetingCitations = $counMeetingCitations->paginate($request->get('per_page') ?? 10);

        $resource = $counMeetingCitations->toArray();

        $resource['lists'] = CounMeetingCitation::getLists();

        return $this->responseSuccess(
            'JUNTASCITACIONE obtenidos!',
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
        // user_can(['coun_meeting_citation.create']);

        return response()->json([
            'message' => 'Formulario para crear JUNTASCITACIONE!',
            'data' => null,
            'lists' => CounMeetingCitation::getLists()
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
        // user_can(['coun_meeting_citation.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $counMeetingCitation = CounMeetingCitation::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $counMeetingCitation);
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
            'JUNTASCITACIONE almacenado!',
            $counMeetingCitation->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\CounMeetingCitation $counMeetingCitation * @return \Illuminate\Http\Response
     */
    public function show($counMeetingCitationId)
    {
        // user_can(['coun_meeting_citation.show']);

        $counMeetingCitation = CounMeetingCitation::with(CounMeetingCitation::getRelationships())->findOrFail($counMeetingCitationId);


        $resource = $counMeetingCitation->toArray();
        $resource['lists'] = CounMeetingCitation::getLists();

        return $this->responseSuccess(
            'JUNTASCITACIONE obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\CounMeetingCitation $counMeetingCitation * @return \Illuminate\Http\Response
     */
    public function edit($counMeetingCitationId)
    {
        // user_can(['coun_meeting_citation.edit']);

        $counMeetingCitation = CounMeetingCitation::with(CounMeetingCitation::getRelationships())->findOrFail($counMeetingCitationId);

        return $this->responseSuccess(
            'Formulario para editar JUNTASCITACIONE!',
            [
                'model' => $counMeetingCitation,
                'lists' => CounMeetingCitation::getLists(),
            ],
            false
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param \App\CounMeetingCitation $counMeetingCitation * @return \Illuminate\Http\Response
     */
    public function duplicate($counMeetingCitationId)
    {
        // user_can(['coun_meeting_citation.duplicate']);

        $counMeetingCitation = CounMeetingCitation::with(CounMeetingCitation::getRelationships())->findOrFail($counMeetingCitationId);
        $counMeetingCitation->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar JUNTASCITACIONE!',
            [
                'model' => $counMeetingCitation,
                'lists' => CounMeetingCitation::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\CounMeetingCitation $counMeetingCitation * @return \Illuminate\Http\Response
     */
    public function update($counMeetingCitationId, Request $request)
    {

        // user_can(['coun_meeting_citation.update']);

        $counMeetingCitation = CounMeetingCitation::findOrFail($counMeetingCitationId);

        $this->varidate($request, $counMeetingCitation);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $counMeetingCitation->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $counMeetingCitation);
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
            'JUNTASCITACIONE actualizado!',
            $counMeetingCitation->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\CounMeetingCitation $counMeetingCitation * @return \Illuminate\Http\Response
     */
    public function destroy($counMeetingCitationId)
    {

        // user_can(['coun_meeting_citation.destroy']);

        $counMeetingCitation = CounMeetingCitation::findOrFail($counMeetingCitationId);
        $counMeetingCitation->delete();
        return $this->responseSuccess(
            'JUNTASCITACIONE eliminado!',
            $counMeetingCitation->toArray(),
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
    public function varidate(Request $request, CounMeetingCitation $counMeetingCitation = null)
    {
        $request->validate(CounMeetingCitation::getValidateRule($counMeetingCitation));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeetingCitation $counMeetingCitation)
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
            $counMeetingCitation->$method()->sync($pivotIds);
        }
    }


// end section

    public function sign(Request $request)
    {
        // dd($request->all());
        $citation = CounMeetingCitation::find($request->get('id'));

        $meeting = CounMeeting::find($request->get('coun_meeting_id'));

        if ($meeting->status !== 'finalized') {
            return $this->responseError('El acta no esta finalizada!');
        }

        try {
            $citation->update($request->all());
        } catch (\Exception $exception) {
            return $this->responseError($exception->getMessage());
        }

        return $this->responseSuccess('Acta firmada con éxito!', $citation->toArray());
    }

}
