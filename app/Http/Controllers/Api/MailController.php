<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MailController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['mail.index']);

		// $mails = new Mail;
	    $mails = Mail::with(Mail::getRelationships());

		// (1)filltering
        $mails = $this->filtering($request, $mails);
        $mails = $mails->get();

        // (2)sort
        $mails = $this->sorting($request, $mails);

        // (3)paginate
        $mails = $mails->paginate($request->get('per_page') ?? 10);

        $resource = $mails->toArray();

        $resource['lists'] = Mail::getLists();

        return $this->responseSuccess(
          'CORREO obtenidos!',
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
        // user_can(['mail.create']);

            return response()->json([
              'message' => 'Formulario para crear CORREO!',
              'data' => null,
              'lists' => Mail::getLists()
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
        // user_can(['mail.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $mail = Mail::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $mail);
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
          'CORREO almacenado!',
          $mail->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function show($mailId)
    {
        // user_can(['mail.show']);

        $mail = Mail::with(Mail::getRelationships())->findOrFail($mailId);

                                
        $resource = $mail->toArray();
        $resource['lists'] = Mail::getLists();

        return $this->responseSuccess(
          'CORREO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function edit($mailId)
    {
        // user_can(['mail.edit']);

        $mail = Mail::with(Mail::getRelationships())->findOrFail($mailId);
                                
        return $this->responseSuccess(
          'Formulario para editar CORREO!',
          [
            'model' => $mail,
            'lists' => Mail::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Mail  $mail	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($mailId)
	{
        // user_can(['mail.duplicate']);

        $mail = Mail::with(Mail::getRelationships())->findOrFail($mailId);
        $mail->id = null;
                                
        return $this->responseSuccess(
          'Formulario para duplicar CORREO!',
          [
            'model' => $mail,
            'lists' => Mail::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function update($mailId, Request $request)
    {

        // user_can(['mail.update']);

        $mail = Mail::findOrFail($mailId);

        $this->varidate($request, $mail);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $mail->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $mail);
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
          'CORREO actualizado!',
          $mail->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mail  $mail     * @return \Illuminate\Http\Response
     */
    public function destroy($mailId)
    {

        // user_can(['mail.destroy']);

        $mail = Mail::findOrFail($mailId);
        $mail->delete();
        return $this->responseSuccess(
          'CORREO eliminado!',
          $mail->toArray(),
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
    public function varidate(Request $request, Mail $mail = null)
    {
        $request->validate(Mail::getValidateRule($mail));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Mail $mail)
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
            $mail->$method()->sync($pivotIds);
        }
    }


// end section

}
