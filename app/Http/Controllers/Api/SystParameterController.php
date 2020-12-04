<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystParameter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystParameterController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_parameter.index']);

		// $systParameters = new SystParameter;
	    $systParameters = SystParameter::with(SystParameter::getRelationships());

		// (1)filltering
        $systParameters = $this->filtering($request, $systParameters);
        $systParameters = $systParameters->get();

        // (2)sort
        $systParameters = $this->sorting($request, $systParameters);

        // (3)paginate
        $systParameters = $systParameters->paginate($request->get('per_page') ?? 10);

        $resource = $systParameters->toArray();

        $resource['lists'] = SystParameter::getLists();

        return $this->responseSuccess(
          'PARAMETRO obtenidos!',
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
        // user_can(['syst_parameter.create']);

            return response()->json([
              'message' => 'Formulario para crear PARAMETRO!',
              'data' => null,
              'lists' => SystParameter::getLists()
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
        // user_can(['syst_parameter.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $systParameter = SystParameter::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systParameter);
          }
            if (isset($input['comp_responsabilities']) && count($input['comp_responsabilities'])) {
                foreach ($input['comp_responsabilities'] as $compResponsability) {
                  \App\Models\CompResponsability::find($compResponsability['id'])->update(['syst_parameter_id' => $systParameter->id]);
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
          'PARAMETRO almacenado!',
          $systParameter->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function show($systParameterId)
    {
        // user_can(['syst_parameter.show']);

        $systParameter = SystParameter::with(SystParameter::getRelationships())->findOrFail($systParameterId);

                                                $systParameter->comp_responsability_ids = collect($systParameter->compResponsabilities)->pluck('id');
                        
        $resource = $systParameter->toArray();
        $resource['lists'] = SystParameter::getLists();

        return $this->responseSuccess(
          'PARAMETRO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function edit($systParameterId)
    {
        // user_can(['syst_parameter.edit']);

        $systParameter = SystParameter::with(SystParameter::getRelationships())->findOrFail($systParameterId);
                                                $systParameter->comp_responsability_ids = collect($systParameter->compResponsabilities)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar PARAMETRO!',
          [
            'model' => $systParameter,
            'lists' => SystParameter::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystParameter  $systParameter	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systParameterId)
	{
        // user_can(['syst_parameter.duplicate']);

        $systParameter = SystParameter::with(SystParameter::getRelationships())->findOrFail($systParameterId);
        $systParameter->id = null;
                                                $systParameter->comp_responsability_ids = collect($systParameter->compResponsabilities)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar PARAMETRO!',
          [
            'model' => $systParameter,
            'lists' => SystParameter::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function update($systParameterId, Request $request)
    {

        // user_can(['syst_parameter.update']);

        $systParameter = SystParameter::findOrFail($systParameterId);

        $this->varidate($request, $systParameter);

        $input = $request->input('model');

                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $systParameter->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systParameter);
          }

            if (isset($input['comp_responsabilities']) && count($input['comp_responsabilities'])) {
                \App\Models\CompResponsability::where('syst_parameter_id', $systParameterId)
                    ->update(['syst_parameter_id' => null]);
                foreach ($input['comp_responsabilities'] as $compResponsability) {
                  \App\Models\CompResponsability::find($compResponsability['id'])->update(['syst_parameter_id' => $systParameter->id]);
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
          'PARAMETRO actualizado!',
          $systParameter->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystParameter  $systParameter     * @return \Illuminate\Http\Response
     */
    public function destroy($systParameterId)
    {

        // user_can(['syst_parameter.destroy']);

        $systParameter = SystParameter::findOrFail($systParameterId);
        $systParameter->delete();
        return $this->responseSuccess(
          'PARAMETRO eliminado!',
          $systParameter->toArray(),
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
    public function varidate(Request $request, SystParameter $systParameter = null)
    {
        $request->validate(SystParameter::getValidateRule($systParameter));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystParameter $systParameter)
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
            $systParameter->$method()->sync($pivotIds);
        }
    }


// end section

}
