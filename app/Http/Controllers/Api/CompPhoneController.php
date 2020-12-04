<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CompPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompPhoneController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['comp_phone.index']);

		// $compPhones = new CompPhone;
	    $compPhones = CompPhone::with(CompPhone::getRelationships());

		// (1)filltering
        $compPhones = $this->filtering($request, $compPhones);
        $compPhones = $compPhones->get();

        // (2)sort
        $compPhones = $this->sorting($request, $compPhones);

        // (3)paginate
        $compPhones = $compPhones->paginate($request->get('per_page') ?? 10);

        $resource = $compPhones->toArray();

        $resource['lists'] = CompPhone::getLists();

        return $this->responseSuccess(
          'TELÉFONOSDEEMPRESA obtenidos!',
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
        // user_can(['comp_phone.create']);

            return response()->json([
              'message' => 'Formulario para crear TELÉFONOSDEEMPRESA!',
              'data' => null,
              'lists' => CompPhone::getLists()
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
        // user_can(['comp_phone.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //create data
          $compPhone = CompPhone::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $compPhone);
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
          'TELÉFONOSDEEMPRESA almacenado!',
          $compPhone->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function show($compPhoneId)
    {
        // user_can(['comp_phone.show']);

        $compPhone = CompPhone::with(CompPhone::getRelationships())->findOrFail($compPhoneId);

                                
        $resource = $compPhone->toArray();
        $resource['lists'] = CompPhone::getLists();

        return $this->responseSuccess(
          'TELÉFONOSDEEMPRESA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function edit($compPhoneId)
    {
        // user_can(['comp_phone.edit']);

        $compPhone = CompPhone::with(CompPhone::getRelationships())->findOrFail($compPhoneId);
                                
        return $this->responseSuccess(
          'Formulario para editar TELÉFONOSDEEMPRESA!',
          [
            'model' => $compPhone,
            'lists' => CompPhone::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CompPhone  $compPhone	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($compPhoneId)
	{
        // user_can(['comp_phone.duplicate']);

        $compPhone = CompPhone::with(CompPhone::getRelationships())->findOrFail($compPhoneId);
        $compPhone->id = null;
                                
        return $this->responseSuccess(
          'Formulario para duplicar TELÉFONOSDEEMPRESA!',
          [
            'model' => $compPhone,
            'lists' => CompPhone::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function update($compPhoneId, Request $request)
    {

        // user_can(['comp_phone.update']);

        $compPhone = CompPhone::findOrFail($compPhoneId);

        $this->varidate($request, $compPhone);

        $input = $request->input('model');

                                                                        
        DB::beginTransaction();
        try {
          //update data
          $compPhone->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $compPhone);
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
          'TELÉFONOSDEEMPRESA actualizado!',
          $compPhone->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompPhone  $compPhone     * @return \Illuminate\Http\Response
     */
    public function destroy($compPhoneId)
    {

        // user_can(['comp_phone.destroy']);

        $compPhone = CompPhone::findOrFail($compPhoneId);
        $compPhone->delete();
        return $this->responseSuccess(
          'TELÉFONOSDEEMPRESA eliminado!',
          $compPhone->toArray(),
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
    public function varidate(Request $request, CompPhone $compPhone = null)
    {
        $request->validate(CompPhone::getValidateRule($compPhone));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompPhone $compPhone)
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
            $compPhone->$method()->sync($pivotIds);
        }
    }


// end section

}
