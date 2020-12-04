<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Mail\CouncilCitationMail;
use App\Mail\SendEmailMail;
use App\Models\CounMeeting;
use App\Models\CounMeetingAgenda;
use App\Models\CounMeetingCitation;
use App\Models\CounMember;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class CounMeetingController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['coun_meeting.index']);

		// $counMeetings = new CounMeeting;
	    $counMeetings = CounMeeting::with(CounMeeting::getRelationships());

		// (1)filltering
        $counMeetings = $this->filtering($request, $counMeetings);
        $counMeetings = $counMeetings->get();

        // (2)sort
        $counMeetings = $this->sorting($request, $counMeetings);

        // (3)paginate
        $counMeetings = $counMeetings->paginate($request->get('per_page') ?? 10);

        $resource = $counMeetings->toArray();

        $resource['lists'] = CounMeeting::getLists();

        return $this->responseSuccess(
          'JUNTASDELCONSEJO obtenidos!',
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
        // user_can(['coun_meeting.create']);

            return response()->json([
              'message' => 'Formulario para crear JUNTASDELCONSEJO!',
              'data' => null,
              'lists' => CounMeeting::getLists()
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
        // user_can(['coun_meeting.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $counMeeting = CounMeeting::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $counMeeting);
          }
            if (isset($input['coun_meeting_agendas']) && count($input['coun_meeting_agendas'])) {
                foreach ($input['coun_meeting_agendas'] as $counMeetingAgenda) {
                  \App\Models\CounMeetingAgenda::find($counMeetingAgenda['id'])->update(['coun_meeting_id' => $counMeeting->id]);
                }
            }
            if (isset($input['coun_meeting_citations']) && count($input['coun_meeting_citations'])) {
                foreach ($input['coun_meeting_citations'] as $counMeetingCitation) {
                  \App\Models\CounMeetingCitation::find($counMeetingCitation['id'])->update(['coun_meeting_id' => $counMeeting->id]);
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
          'JUNTASDELCONSEJO almacenado!',
          $counMeeting->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function show($counMeetingId)
    {
        // user_can(['coun_meeting.show']);

        $counMeeting = CounMeeting::with(CounMeeting::getRelationships())->findOrFail($counMeetingId);

                        $counMeeting->coun_meeting_agenda_ids = collect($counMeeting->counMeetingAgendas)->pluck('id');
                                        $counMeeting->coun_meeting_citation_ids = collect($counMeeting->counMeetingCitations)->pluck('id');
                        
        $resource = $counMeeting->toArray();
        $resource['lists'] = CounMeeting::getLists();

        return $this->responseSuccess(
          'JUNTASDELCONSEJO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function edit($counMeetingId)
    {
        // user_can(['coun_meeting.edit']);

        $counMeeting = CounMeeting::with(CounMeeting::getRelationships())->findOrFail($counMeetingId);
                        $counMeeting->coun_meeting_agenda_ids = collect($counMeeting->counMeetingAgendas)->pluck('id');
                                        $counMeeting->coun_meeting_citation_ids = collect($counMeeting->counMeetingCitations)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar JUNTASDELCONSEJO!',
          [
            'model' => $counMeeting,
            'lists' => CounMeeting::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CounMeeting  $counMeeting	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($counMeetingId)
	{
        // user_can(['coun_meeting.duplicate']);

        $counMeeting = CounMeeting::with(CounMeeting::getRelationships())->findOrFail($counMeetingId);
        $counMeeting->id = null;
                        $counMeeting->coun_meeting_agenda_ids = collect($counMeeting->counMeetingAgendas)->pluck('id');
                                        $counMeeting->coun_meeting_citation_ids = collect($counMeeting->counMeetingCitations)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar JUNTASDELCONSEJO!',
          [
            'model' => $counMeeting,
            'lists' => CounMeeting::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function update($counMeetingId, Request $request)
    {

        // user_can(['coun_meeting.update']);

        $counMeeting = CounMeeting::findOrFail($counMeetingId);

        $this->varidate($request, $counMeeting);

        $input = $request->input('model');

                                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $counMeeting->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $counMeeting);
          }

            if (isset($input['coun_meeting_agendas']) && count($input['coun_meeting_agendas'])) {
                \App\Models\CounMeetingAgenda::where('coun_meeting_id', $counMeetingId)
                    ->update(['coun_meeting_id' => null]);
                foreach ($input['coun_meeting_agendas'] as $counMeetingAgenda) {
                  \App\Models\CounMeetingAgenda::find($counMeetingAgenda['id'])->update(['coun_meeting_id' => $counMeeting->id]);
                }
            }
            if (isset($input['coun_meeting_citations']) && count($input['coun_meeting_citations'])) {
                \App\Models\CounMeetingCitation::where('coun_meeting_id', $counMeetingId)
                    ->update(['coun_meeting_id' => null]);
                foreach ($input['coun_meeting_citations'] as $counMeetingCitation) {
                  \App\Models\CounMeetingCitation::find($counMeetingCitation['id'])->update(['coun_meeting_id' => $counMeeting->id]);
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
          'JUNTASDELCONSEJO actualizado!',
          $counMeeting->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CounMeeting  $counMeeting     * @return \Illuminate\Http\Response
     */
    public function destroy($counMeetingId)
    {

        // user_can(['coun_meeting.destroy']);

        $counMeeting = CounMeeting::findOrFail($counMeetingId);
        $counMeeting->delete();
        return $this->responseSuccess(
          'JUNTASDELCONSEJO eliminado!',
          $counMeeting->toArray(),
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
    public function varidate(Request $request, CounMeeting $counMeeting = null)
    {
        $request->validate(CounMeeting::getValidateRule($counMeeting));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CounMeeting $counMeeting)
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
            $counMeeting->$method()->sync($pivotIds);
        }
    }


// end section

    public function saveCustom(Request $request)
    {
        // dd($request->all());
        $input = $request->all();

        if (!count($request->get('coun_meeting_agendas'))) {
            $this->responseError('Debe agregar ordenes del día!');
        }

        $input['hour'] = $input['hour'] ? date('H:i:s', strtotime($input['hour'])) : null;

        $meeting = CounMeeting::create($input);

        if (count($request->get('coun_meeting_citations'))) {
            foreach ($request->get('coun_meeting_citations') as $citation) {
                $user = User::find($citation['user_id']);
                $citation['coun_meeting_id'] = $meeting->id;
                $citation['name'] = 'Citación para ' . $user->name . ' ' . $meeting->name;
                CounMeetingCitation::create($citation);
            }
        }

        if (count($request->get('coun_meeting_agendas'))) {
            foreach ($request->get('coun_meeting_agendas') as $agenda) {
                $agenda['coun_meeting_id'] = $meeting->id;
                CounMeetingAgenda::create($agenda);
            }
        }

        $members = CounMember::with('user')->get();

        foreach ($members as $member) {
            $citation = [
                'user_id' => $member->user_id,
                'name' => 'Citación para ' . $member->user->name . ' ' . $meeting->name,
                'coun_meeting_id' => $meeting->id,
                'coun_member_id' => $member->id,
            ];
            CounMeetingCitation::create($citation);
        }

        $responseMeeting = CounMeeting::with(CounMeeting::getRelationships())->find($meeting->id);

        foreach ($responseMeeting->toArray()['coun_meeting_citations'] as $citation) {
            $user = User::find($citation['user_id']);
            // dd($user);
            $this->sendCitationMail($user->toArray(), $responseMeeting->toArray());
        }

        return $this->responseSuccess( 'Junta creada con éxito', $responseMeeting->toArray());

    }

    public function updateCustom(Request $request)
    {

        $meeting = CounMeeting::with(CounMeeting::getRelationships())->find($request->get('id'));

        $meeting->update($request->all());

        foreach ($request->get('coun_meeting_agendas') as $agenda) {
            if (isset($agenda['id']) && $agenda['id']) {
                CounMeetingAgenda::find($agenda['id'])->update($agenda);
            } else {
                $agenda['coun_meeting_id'] = $meeting->id;
                CounMeetingAgenda::create($agenda);
            }
        }

        foreach ($request->get('coun_meeting_citations') as $citation) {
            if (isset($citation['id']) && $citation['id']) {
                CounMeetingCitation::find($citation['id'])->update($citation);
            } else {
                $citation['coun_meeting_id'] = $meeting->id;
                CounMeetingCitation::create($citation);
            }
        }

        $responseMeeting = CounMeeting::with(CounMeeting::getRelationships())->find($request->get('id'));


        return $this->responseSuccess( 'Junta editada con éxito', $responseMeeting->toArray());

    }

    public function sendCitationMail($user, $meeting)
    {

        $data = new \stdClass();
        $data->user = $user;
        $data->email = $user['email'];
        $data->subject = 'Citación a junta del concejo';
        $data->name = $user['name'];

        /*$data->anchor = [
            'url' => '',
            'text' => ''
        ];*/

        $data->intro_lines = [
            'Junta del concejo ' . str_pad($meeting['id'], 10, '0', STR_PAD_LEFT),
            'Fecha: ' . date('d/m/Y', strtotime($meeting['date'])),
            'Hora: ' . date('H:i', strtotime($meeting['hour'])),
            'Lugar: ' . $meeting['place'],
        ];
        $data->intro_lines[] = $meeting['url'] ?? 'URL: ' . $meeting['url'];

        $data->intro_lines[] = '<br>' . $meeting['description'];

        $data->outro_lines = [
            'Gracias por su atención.'
        ];

        $data->view = 'mail.email_template';

        try {
            Mail::to($user['email'])->queue(new SendEmailMail($data));
        } catch (\Exception $exception) {
            return $this->responseError($exception->getMessage());
        }

    }

    public function sendSignatureMail($user, $meetingCitation)
    {

        $data = new \stdClass();
        $data->user = $user;
        $data->email = $user['email'];
        $data->subject = 'Firma de acta junta del concejo ' . str_pad($meetingCitation['coun_meeting_id'], 10, '0', STR_PAD_LEFT);
        $data->name = $user['name'];

        $data->intro_lines = [
            'Por favor siga el siguiente link para firmar el acta del concejo N0. ' . str_pad($meetingCitation['coun_meeting_id'], 10, '0', STR_PAD_LEFT),
        ];

        $data->anchor = [
            'url' => 'http://localhost:4200/coun-meeting-citations/' . $meetingCitation['id'] . '/sign',
            'text' => 'Firmar Acta'
        ];

        $data->outro_lines = [
            'Gracias por su atención.'
        ];

        $data->view = 'mail.email_template';

        try {
            Mail::to($user['email'])->queue(new SendEmailMail($data));
        } catch (\Exception $exception) {
            return $this->responseError($exception->getMessage());
        }

    }


    public function finalize(Request $request)
    {
        // dd($request->all());
        $model = $request->all()['model'];
        $citations = CounMeetingCitation::with(CounMeetingCitation::getRelationships())
            ->where('coun_meeting_id', $model['id'])->get();

        foreach ($citations->toArray() as $citation) {
            $this->sendSignatureMail($citation['user'], $citation);
        }

        try {
            CounMeeting::find($model['id'])->update([
                'status' => 'finalized'
            ]);

            foreach ($model['coun_meeting_agendas'] as $agenda) {
                CounMeetingAgenda::find($agenda['id'])->update([
                    'content' => $agenda['content']
                ]);
            }

        } catch (\Exception $exception) {
            return $this->responseError($exception->getMessage());
        }


        return $this->responseSuccess('Solicitudes de firmas enviadas!');
    }

    public function generatePdf($id)
    {

        $meeting = CounMeeting::with(
            'counMeetingAgendas',
            'counMeetingCitations.user',
            'counMeetingCitations.counMember'
        )->find($id)->toArray();

        // return view('pdf.council_act', $meeting);

        $pdf = \PDF::loadView('pdf.council_act', $meeting);

        // download PDF file with download method
        return $pdf->download('pdf_file.pdf');

        return view('pdf.council_act', $meeting);
    }

}
