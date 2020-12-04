<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystRegion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystRegionController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_region.index']);

		// $systRegions = new SystRegion;
	    $systRegions = SystRegion::with(SystRegion::getRelationships());

		// (1)filltering
        $systRegions = $this->filtering($request, $systRegions);
        $systRegions = $systRegions->get();

        // (2)sort
        $systRegions = $this->sorting($request, $systRegions);

        // (3)paginate
        $systRegions = $systRegions->paginate($request->get('per_page') ?? 10);

        $resource = $systRegions->toArray();

        $resource['lists'] = SystRegion::getLists();

        return $this->responseSuccess(
          'DEPARTAMENTO obtenidos!',
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
        // user_can(['syst_region.create']);

            return response()->json([
              'message' => 'Formulario para crear DEPARTAMENTO!',
              'data' => null,
              'lists' => SystRegion::getLists()
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
        // user_can(['syst_region.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $systRegion = SystRegion::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systRegion);
          }
            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_region_id' => $systRegion->id]);
                }
            }
            if (isset($input['syst_cities']) && count($input['syst_cities'])) {
                foreach ($input['syst_cities'] as $systCity) {
                  \App\Models\SystCity::find($systCity['id'])->update(['syst_region_id' => $systRegion->id]);
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
          'DEPARTAMENTO almacenado!',
          $systRegion->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function show($systRegionId)
    {
        // user_can(['syst_region.show']);

        $systRegion = SystRegion::with(SystRegion::getRelationships())->findOrFail($systRegionId);

                        $systRegion->user_profile_ids = collect($systRegion->userProfiles)->pluck('id');
                                        $systRegion->syst_city_ids = collect($systRegion->systCities)->pluck('id');
                                                
        $resource = $systRegion->toArray();
        $resource['lists'] = SystRegion::getLists();

        return $this->responseSuccess(
          'DEPARTAMENTO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function edit($systRegionId)
    {
        // user_can(['syst_region.edit']);

        $systRegion = SystRegion::with(SystRegion::getRelationships())->findOrFail($systRegionId);
                        $systRegion->user_profile_ids = collect($systRegion->userProfiles)->pluck('id');
                                        $systRegion->syst_city_ids = collect($systRegion->systCities)->pluck('id');
                                                
        return $this->responseSuccess(
          'Formulario para editar DEPARTAMENTO!',
          [
            'model' => $systRegion,
            'lists' => SystRegion::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystRegion  $systRegion	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systRegionId)
	{
        // user_can(['syst_region.duplicate']);

        $systRegion = SystRegion::with(SystRegion::getRelationships())->findOrFail($systRegionId);
        $systRegion->id = null;
                        $systRegion->user_profile_ids = collect($systRegion->userProfiles)->pluck('id');
                                        $systRegion->syst_city_ids = collect($systRegion->systCities)->pluck('id');
                                                
        return $this->responseSuccess(
          'Formulario para duplicar DEPARTAMENTO!',
          [
            'model' => $systRegion,
            'lists' => SystRegion::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function update($systRegionId, Request $request)
    {

        // user_can(['syst_region.update']);

        $systRegion = SystRegion::findOrFail($systRegionId);

        $this->varidate($request, $systRegion);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $systRegion->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systRegion);
          }

            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                \App\Models\UserProfile::where('syst_region_id', $systRegionId)
                    ->update(['syst_region_id' => null]);
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_region_id' => $systRegion->id]);
                }
            }
            if (isset($input['syst_cities']) && count($input['syst_cities'])) {
                \App\Models\SystCity::where('syst_region_id', $systRegionId)
                    ->update(['syst_region_id' => null]);
                foreach ($input['syst_cities'] as $systCity) {
                  \App\Models\SystCity::find($systCity['id'])->update(['syst_region_id' => $systRegion->id]);
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
          'DEPARTAMENTO actualizado!',
          $systRegion->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystRegion  $systRegion     * @return \Illuminate\Http\Response
     */
    public function destroy($systRegionId)
    {

        // user_can(['syst_region.destroy']);

        $systRegion = SystRegion::findOrFail($systRegionId);
        $systRegion->delete();
        return $this->responseSuccess(
          'DEPARTAMENTO eliminado!',
          $systRegion->toArray(),
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
    public function varidate(Request $request, SystRegion $systRegion = null)
    {
        $request->validate(SystRegion::getValidateRule($systRegion));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystRegion $systRegion)
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
            $systRegion->$method()->sync($pivotIds);
        }
    }


// end section

}
