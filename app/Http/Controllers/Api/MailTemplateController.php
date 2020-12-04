<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\MailTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MailTemplateController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['mail_template.index']);

		// $mailTemplates = new MailTemplate;
	    $mailTemplates = MailTemplate::with(MailTemplate::getRelationships());

		// (1)filltering
        $mailTemplates = $this->filtering($request, $mailTemplates);
        $mailTemplates = $mailTemplates->get();

        // (2)sort
        $mailTemplates = $this->sorting($request, $mailTemplates);

        // (3)paginate
        $mailTemplates = $mailTemplates->paginate($request->get('per_page') ?? 10);

        $resource = $mailTemplates->toArray();

        $resource['lists'] = MailTemplate::getLists();

        return $this->responseSuccess(
          'CORREOSPLANTILLA obtenidos!',
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
        // user_can(['mail_template.create']);

            return response()->json([
              'message' => 'Formulario para crear CORREOSPLANTILLA!',
              'data' => null,
              'lists' => MailTemplate::getLists()
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
        // user_can(['mail_template.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //create data
          $mailTemplate = MailTemplate::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $mailTemplate);
          }
            if (isset($input['mails']) && count($input['mails'])) {
                foreach ($input['mails'] as $mail) {
                  \App\Models\Mail::find($mail['id'])->update(['mail_template_id' => $mailTemplate->id]);
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
          'CORREOSPLANTILLA almacenado!',
          $mailTemplate->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function show($mailTemplateId)
    {
        // user_can(['mail_template.show']);

        $mailTemplate = MailTemplate::with(MailTemplate::getRelationships())->findOrFail($mailTemplateId);

                        $mailTemplate->mail_ids = collect($mailTemplate->mails)->pluck('id');
                        
        $resource = $mailTemplate->toArray();
        $resource['lists'] = MailTemplate::getLists();

        return $this->responseSuccess(
          'CORREOSPLANTILLA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function edit($mailTemplateId)
    {
        // user_can(['mail_template.edit']);

        $mailTemplate = MailTemplate::with(MailTemplate::getRelationships())->findOrFail($mailTemplateId);
                        $mailTemplate->mail_ids = collect($mailTemplate->mails)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar CORREOSPLANTILLA!',
          [
            'model' => $mailTemplate,
            'lists' => MailTemplate::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\MailTemplate  $mailTemplate	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($mailTemplateId)
	{
        // user_can(['mail_template.duplicate']);

        $mailTemplate = MailTemplate::with(MailTemplate::getRelationships())->findOrFail($mailTemplateId);
        $mailTemplate->id = null;
                        $mailTemplate->mail_ids = collect($mailTemplate->mails)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar CORREOSPLANTILLA!',
          [
            'model' => $mailTemplate,
            'lists' => MailTemplate::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function update($mailTemplateId, Request $request)
    {

        // user_can(['mail_template.update']);

        $mailTemplate = MailTemplate::findOrFail($mailTemplateId);

        $this->varidate($request, $mailTemplate);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //update data
          $mailTemplate->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $mailTemplate);
          }

            if (isset($input['mails']) && count($input['mails'])) {
                \App\Models\Mail::where('mail_template_id', $mailTemplateId)
                    ->update(['mail_template_id' => null]);
                foreach ($input['mails'] as $mail) {
                  \App\Models\Mail::find($mail['id'])->update(['mail_template_id' => $mailTemplate->id]);
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
          'CORREOSPLANTILLA actualizado!',
          $mailTemplate->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MailTemplate  $mailTemplate     * @return \Illuminate\Http\Response
     */
    public function destroy($mailTemplateId)
    {

        // user_can(['mail_template.destroy']);

        $mailTemplate = MailTemplate::findOrFail($mailTemplateId);
        $mailTemplate->delete();
        return $this->responseSuccess(
          'CORREOSPLANTILLA eliminado!',
          $mailTemplate->toArray(),
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
    public function varidate(Request $request, MailTemplate $mailTemplate = null)
    {
        $request->validate(MailTemplate::getValidateRule($mailTemplate));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, MailTemplate $mailTemplate)
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
            $mailTemplate->$method()->sync($pivotIds);
        }
    }


// end section

}
