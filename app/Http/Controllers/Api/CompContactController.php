<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CompContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompContactController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['comp_contact.index']);

		// $compContacts = new CompContact;
	    $compContacts = CompContact::with(CompContact::getRelationships());

		// (1)filltering
        $compContacts = $this->filtering($request, $compContacts);
        $compContacts = $compContacts->get();

        // (2)sort
        $compContacts = $this->sorting($request, $compContacts);

        // (3)paginate
        $compContacts = $compContacts->paginate($request->get('per_page') ?? 10);

        $resource = $compContacts->toArray();

        $resource['lists'] = CompContact::getLists();

        return $this->responseSuccess(
          'EMPRESASCONTACTO obtenidos!',
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
        // user_can(['comp_contact.create']);

            return response()->json([
              'message' => 'Formulario para crear EMPRESASCONTACTO!',
              'data' => null,
              'lists' => CompContact::getLists()
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
        // user_can(['comp_contact.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $compContact = CompContact::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $compContact);
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
          'EMPRESASCONTACTO almacenado!',
          $compContact->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompContact  $compContact     * @return \Illuminate\Http\Response
     */
    public function show($compContactId)
    {
        // user_can(['comp_contact.show']);

        $compContact = CompContact::with(CompContact::getRelationships())->findOrFail($compContactId);

                                                        
        $resource = $compContact->toArray();
        $resource['lists'] = CompContact::getLists();

        return $this->responseSuccess(
          'EMPRESASCONTACTO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompContact  $compContact     * @return \Illuminate\Http\Response
     */
    public function edit($compContactId)
    {
        // user_can(['comp_contact.edit']);

        $compContact = CompContact::with(CompContact::getRelationships())->findOrFail($compContactId);
                                                        
        return $this->responseSuccess(
          'Formulario para editar EMPRESASCONTACTO!',
          [
            'model' => $compContact,
            'lists' => CompContact::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CompContact  $compContact	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($compContactId)
	{
        // user_can(['comp_contact.duplicate']);

        $compContact = CompContact::with(CompContact::getRelationships())->findOrFail($compContactId);
        $compContact->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para duplicar EMPRESASCONTACTO!',
          [
            'model' => $compContact,
            'lists' => CompContact::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompContact  $compContact     * @return \Illuminate\Http\Response
     */
    public function update($compContactId, Request $request)
    {

        // user_can(['comp_contact.update']);

        $compContact = CompContact::findOrFail($compContactId);

        $this->varidate($request, $compContact);

        $input = $request->input('model');

                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $compContact->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $compContact);
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
          'EMPRESASCONTACTO actualizado!',
          $compContact->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompContact  $compContact     * @return \Illuminate\Http\Response
     */
    public function destroy($compContactId)
    {

        // user_can(['comp_contact.destroy']);

        $compContact = CompContact::findOrFail($compContactId);
        $compContact->delete();
        return $this->responseSuccess(
          'EMPRESASCONTACTO eliminado!',
          $compContact->toArray(),
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
    public function varidate(Request $request, CompContact $compContact = null)
    {
        $request->validate(CompContact::getValidateRule($compContact));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompContact $compContact)
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
            $compContact->$method()->sync($pivotIds);
        }
    }


// end section

}
