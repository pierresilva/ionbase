<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CounMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CounMemberController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['coun_member.index']);

        // $counMembers = new CounMember;
        $counMembers = CounMember::with(CounMember::getRelationships());

        // (1)filltering
        $counMembers = $this->filtering($request, $counMembers);
        $counMembers = $counMembers->get();

        // (2)sort
        $counMembers = $this->sorting($request, $counMembers);

        // (3)paginate
        $counMembers = $counMembers->paginate($request->get('per_page') ?? 10);

        $resource = $counMembers->toArray();

        $resource['lists'] = CounMember::getLists();

        return $this->responseSuccess(
            'JUNTASMIEMBRO obtenidos!',
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
        // user_can(['coun_member.create']);

        return response()->json([
            'message' => 'Formulario para crear JUNTASMIEMBRO!',
            'data' => null,
            'lists' => CounMember::getLists()
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
        // user_can(['coun_member.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $counMember = CounMember::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $counMember);
            }
            if (isset($input['coun_meeting_citations']) && count($input['coun_meeting_citations'])) {
                foreach ($input['coun_meeting_citations'] as $counMeetingCitation) {
                    \App\Models\CounMeetingCitation::find($counMeetingCitation['id'])->update(['coun_member_id' => $counMember->id]);
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
            'JUNTASMIEMBRO almacenado!',
            $counMember->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\CounMember $counMember * @return \Illuminate\Http\Response
     */
    public function show($counMemberId)
    {
        // user_can(['coun_member.show']);

        $counMember = CounMember::with(CounMember::getRelationships())->findOrFail($counMemberId);

        $counMember->coun_meeting_citation_ids = collect($counMember->counMeetingCitations)->pluck('id');

        $resource = $counMember->toArray();
        $resource['lists'] = CounMember::getLists();

        return $this->responseSuccess(
            'JUNTASMIEMBRO obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\CounMember $counMember * @return \Illuminate\Http\Response
     */
    public function edit($counMemberId)
    {
        // user_can(['coun_member.edit']);

        $counMember = CounMember::with(CounMember::getRelationships())->findOrFail($counMemberId);
        $counMember->coun_meeting_citation_ids = collect($counMember->counMeetingCitations)->pluck('id');

        return $this->responseSuccess(
            'Formulario para editar JUNTASMIEMBRO!',
            [
                'model' => $counMember,
                'lists' => CounMember::getLists(),
            ],
            false
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param \App\CounMember $counMember * @return \Illuminate\Http\Response
     */
    public function duplicate($counMemberId)
    {
        // user_can(['coun_member.duplicate']);

        $counMember = CounMember::with(CounMember::getRelationships())->findOrFail($counMemberId);
        $counMember->id = null;
        $counMember->coun_meeting_citation_ids = collect($counMember->counMeetingCitations)->pluck('id');

        return $this->responseSuccess(
            'Formulario para duplicar JUNTASMIEMBRO!',
            [
                'model' => $counMember,
                'lists' => CounMember::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\CounMember $counMember * @return \Illuminate\Http\Response
     */
    public function update($counMemberId, Request $request)
    {

        // user_can(['coun_member.update']);

        $counMember = CounMember::findOrFail($counMemberId);

        $this->varidate($request, $counMember);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //update data
            $counMember->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $counMember);
            }

            if (isset($input['coun_meeting_citations']) && count($input['coun_meeting_citations'])) {
                \App\Models\CounMeetingCitation::where('coun_member_id', $counMemberId)
                    ->update(['coun_member_id' => null]);
                foreach ($input['coun_meeting_citations'] as $counMeetingCitation) {
                    \App\Models\CounMeetingCitation::find($counMeetingCitation['id'])->update(['coun_member_id' => $counMember->id]);
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
            'JUNTASMIEMBRO actualizado!',
            $counMember->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\CounMember $counMember * @return \Illuminate\Http\Response
     */
    public function destroy($counMemberId)
    {

        // user_can(['coun_member.destroy']);

        $counMember = CounMember::findOrFail($counMemberId);
        $counMember->delete();
        return $this->responseSuccess(
            'JUNTASMIEMBRO eliminado!',
            $counMember->toArray(),
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
    public function varidate(Request $request, CounMember $counMember = null)
    {
        $request->validate(CounMember::getValidateRule($counMember));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMember $counMember)
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
            $counMember->$method()->sync($pivotIds);
        }
    }


// end section

}
