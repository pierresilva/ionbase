<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperReplacement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperReplacementController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_replacement.index']);

		// $operReplacements = new OperReplacement;
		$operReplacements = OperReplacement::with(OperReplacement::getRelationships());

		// (1)filltering
        $operReplacements = $this->filtering($request, $operReplacements);
        $operReplacements = $operReplacements->get();

        // (2)sort
        $operReplacements = $this->sorting($request, $operReplacements);

        // (3)paginate
        $operReplacements = $operReplacements->paginate($request->get('per_page') ?? 10);

        $resource = $operReplacements->toArray();

        $resource['lists'] = OperReplacement::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADREPUESTO obtenidos!',
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
        // user_can(['oper_replacement.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADREPUESTO obtenido!',
              'data' => null,
              'lists' => OperReplacement::getLists()
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
        // user_can(['oper_replacement.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $operReplacement = OperReplacement::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operReplacement);
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
          'OPERATIVIDADREPUESTO almacenado!',
          $operReplacement->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function show($operReplacementId)
    {
        // user_can(['oper_replacement.show']);

        $operReplacement = OperReplacement::with(OperReplacement::getRelationships())->findOrFail($operReplacementId);

                                                        
        $resource = $operReplacement->toArray();
        $resource['lists'] = OperReplacement::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADREPUESTO obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function edit($operReplacementId)
    {
        // user_can(['oper_replacement.edit']);

        $operReplacement = OperReplacement::with(OperReplacement::getRelationships())->findOrFail($operReplacementId);
                                                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADREPUESTO obtenidos!',
          [
            'model' => $operReplacement,
            'lists' => OperReplacement::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperReplacement  $operReplacement	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operReplacementId)
	{
        // user_can(['oper_replacement.duplicate']);

        $operReplacement = OperReplacement::with(OperReplacement::getRelationships())->findOrFail($operReplacementId);
        $operReplacement->id = null;
                                                        
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADREPUESTO obtenidos!',
          [
            'model' => $operReplacement,
            'lists' => OperReplacement::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function update($operReplacementId, Request $request)
    {

        // user_can(['oper_replacement.update']);

        $operReplacement = OperReplacement::findOrFail($operReplacementId);

        $this->varidate($request, $operReplacement);

        $input = $request->input('model');

                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $operReplacement->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operReplacement);
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
          'OPERATIVIDADREPUESTO actualizado!',
          $operReplacement->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperReplacement  $operReplacement     * @return \Illuminate\Http\Response
     */
    public function destroy($operReplacementId)
    {

        // user_can(['oper_replacement.destroy']);

        $operReplacement = OperReplacement::findOrFail($operReplacementId);
        $operReplacement->delete();
        return $this->responseSuccess(
          'OPERATIVIDADREPUESTO eliminado!',
          $operReplacement->toArray(),
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
    public function varidate(Request $request, OperReplacement $operReplacement = null)
    {
        $request->validate(OperReplacement::getValidateRule($operReplacement));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperReplacement $operReplacement)
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
            $operReplacement->$method()->sync($pivotIds);
        }
    }

// end section

}
