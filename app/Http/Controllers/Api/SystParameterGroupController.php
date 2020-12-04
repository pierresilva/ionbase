<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystParameterGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystParameterGroupController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_parameter_group.index']);

		// $systParameterGroups = new SystParameterGroup;
	    $systParameterGroups = SystParameterGroup::with(SystParameterGroup::getRelationships());

		// (1)filltering
        $systParameterGroups = $this->filtering($request, $systParameterGroups);
        $systParameterGroups = $systParameterGroups->get();

        // (2)sort
        $systParameterGroups = $this->sorting($request, $systParameterGroups);

        // (3)paginate
        $systParameterGroups = $systParameterGroups->paginate($request->get('per_page') ?? 10);

        $resource = $systParameterGroups->toArray();

        $resource['lists'] = SystParameterGroup::getLists();

        return $this->responseSuccess(
          'GRUPOSDEPARAMETRO obtenidos!',
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
        // user_can(['syst_parameter_group.create']);

            return response()->json([
              'message' => 'Formulario para crear GRUPOSDEPARAMETRO!',
              'data' => null,
              'lists' => SystParameterGroup::getLists()
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
        // user_can(['syst_parameter_group.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //create data
          $systParameterGroup = SystParameterGroup::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systParameterGroup);
          }
            if (isset($input['syst_parameters']) && count($input['syst_parameters'])) {
                foreach ($input['syst_parameters'] as $systParameter) {
                  \App\Models\SystParameter::find($systParameter['id'])->update(['syst_parameter_group_id' => $systParameterGroup->id]);
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
          'GRUPOSDEPARAMETRO almacenado!',
          $systParameterGroup->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function show($systParameterGroupId)
    {
        // user_can(['syst_parameter_group.show']);

        $systParameterGroup = SystParameterGroup::with(SystParameterGroup::getRelationships())->findOrFail($systParameterGroupId);

                        $systParameterGroup->syst_parameter_ids = collect($systParameterGroup->systParameters)->pluck('id');
                        
        $resource = $systParameterGroup->toArray();
        $resource['lists'] = SystParameterGroup::getLists();

        return $this->responseSuccess(
          'GRUPOSDEPARAMETRO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function edit($systParameterGroupId)
    {
        // user_can(['syst_parameter_group.edit']);

        $systParameterGroup = SystParameterGroup::with(SystParameterGroup::getRelationships())->findOrFail($systParameterGroupId);
                        $systParameterGroup->syst_parameter_ids = collect($systParameterGroup->systParameters)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar GRUPOSDEPARAMETRO!',
          [
            'model' => $systParameterGroup,
            'lists' => SystParameterGroup::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystParameterGroup  $systParameterGroup	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systParameterGroupId)
	{
        // user_can(['syst_parameter_group.duplicate']);

        $systParameterGroup = SystParameterGroup::with(SystParameterGroup::getRelationships())->findOrFail($systParameterGroupId);
        $systParameterGroup->id = null;
                        $systParameterGroup->syst_parameter_ids = collect($systParameterGroup->systParameters)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar GRUPOSDEPARAMETRO!',
          [
            'model' => $systParameterGroup,
            'lists' => SystParameterGroup::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function update($systParameterGroupId, Request $request)
    {

        // user_can(['syst_parameter_group.update']);

        $systParameterGroup = SystParameterGroup::findOrFail($systParameterGroupId);

        $this->varidate($request, $systParameterGroup);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //update data
          $systParameterGroup->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systParameterGroup);
          }

            if (isset($input['syst_parameters']) && count($input['syst_parameters'])) {
                \App\Models\SystParameter::where('syst_parameter_group_id', $systParameterGroupId)
                    ->update(['syst_parameter_group_id' => null]);
                foreach ($input['syst_parameters'] as $systParameter) {
                  \App\Models\SystParameter::find($systParameter['id'])->update(['syst_parameter_group_id' => $systParameterGroup->id]);
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
          'GRUPOSDEPARAMETRO actualizado!',
          $systParameterGroup->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystParameterGroup  $systParameterGroup     * @return \Illuminate\Http\Response
     */
    public function destroy($systParameterGroupId)
    {

        // user_can(['syst_parameter_group.destroy']);

        $systParameterGroup = SystParameterGroup::findOrFail($systParameterGroupId);
        $systParameterGroup->delete();
        return $this->responseSuccess(
          'GRUPOSDEPARAMETRO eliminado!',
          $systParameterGroup->toArray(),
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
    public function varidate(Request $request, SystParameterGroup $systParameterGroup = null)
    {
        $request->validate(SystParameterGroup::getValidateRule($systParameterGroup));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystParameterGroup $systParameterGroup)
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
            $systParameterGroup->$method()->sync($pivotIds);
        }
    }


// end section

}
