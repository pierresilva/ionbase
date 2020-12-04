<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CompAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompAddressController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['comp_address.index']);

		// $compAddresses = new CompAddress;
	    $compAddresses = CompAddress::with(CompAddress::getRelationships());

		// (1)filltering
        $compAddresses = $this->filtering($request, $compAddresses);
        $compAddresses = $compAddresses->get();

        // (2)sort
        $compAddresses = $this->sorting($request, $compAddresses);

        // (3)paginate
        $compAddresses = $compAddresses->paginate($request->get('per_page') ?? 10);

        $resource = $compAddresses->toArray();

        $resource['lists'] = CompAddress::getLists();

        return $this->responseSuccess(
          'EMPRESASDIRECCIONE obtenidos!',
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
        // user_can(['comp_address.create']);

            return response()->json([
              'message' => 'Formulario para crear EMPRESASDIRECCIONE!',
              'data' => null,
              'lists' => CompAddress::getLists()
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
        // user_can(['comp_address.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $compAddress = CompAddress::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $compAddress);
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
          'EMPRESASDIRECCIONE almacenado!',
          $compAddress->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function show($compAddressId)
    {
        // user_can(['comp_address.show']);

        $compAddress = CompAddress::with(CompAddress::getRelationships())->findOrFail($compAddressId);

                                                        
        $resource = $compAddress->toArray();
        $resource['lists'] = CompAddress::getLists();

        return $this->responseSuccess(
          'EMPRESASDIRECCIONE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function edit($compAddressId)
    {
        // user_can(['comp_address.edit']);

        $compAddress = CompAddress::with(CompAddress::getRelationships())->findOrFail($compAddressId);
                                                        
        return $this->responseSuccess(
          'Formulario para editar EMPRESASDIRECCIONE!',
          [
            'model' => $compAddress,
            'lists' => CompAddress::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CompAddress  $compAddress	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($compAddressId)
	{
        // user_can(['comp_address.duplicate']);

        $compAddress = CompAddress::with(CompAddress::getRelationships())->findOrFail($compAddressId);
        $compAddress->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para duplicar EMPRESASDIRECCIONE!',
          [
            'model' => $compAddress,
            'lists' => CompAddress::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function update($compAddressId, Request $request)
    {

        // user_can(['comp_address.update']);

        $compAddress = CompAddress::findOrFail($compAddressId);

        $this->varidate($request, $compAddress);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $compAddress->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $compAddress);
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
          'EMPRESASDIRECCIONE actualizado!',
          $compAddress->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompAddress  $compAddress     * @return \Illuminate\Http\Response
     */
    public function destroy($compAddressId)
    {

        // user_can(['comp_address.destroy']);

        $compAddress = CompAddress::findOrFail($compAddressId);
        $compAddress->delete();
        return $this->responseSuccess(
          'EMPRESASDIRECCIONE eliminado!',
          $compAddress->toArray(),
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
    public function varidate(Request $request, CompAddress $compAddress = null)
    {
        $request->validate(CompAddress::getValidateRule($compAddress));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CompAddress $compAddress)
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
            $compAddress->$method()->sync($pivotIds);
        }
    }


// end section

}
