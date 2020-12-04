<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystCountry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystCountryController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_country.index']);

		// $systCountries = new SystCountry;
	    $systCountries = SystCountry::with(SystCountry::getRelationships());

		// (1)filltering
        $systCountries = $this->filtering($request, $systCountries);
        $systCountries = $systCountries->get();

        // (2)sort
        $systCountries = $this->sorting($request, $systCountries);

        // (3)paginate
        $systCountries = $systCountries->paginate($request->get('per_page') ?? 10);

        $resource = $systCountries->toArray();

        $resource['lists'] = SystCountry::getLists();

        return $this->responseSuccess(
          'PAISE obtenidos!',
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
        // user_can(['syst_country.create']);

            return response()->json([
              'message' => 'Formulario para crear PAISE!',
              'data' => null,
              'lists' => SystCountry::getLists()
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
        // user_can(['syst_country.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //create data
          $systCountry = SystCountry::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systCountry);
          }
            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_country_id' => $systCountry->id]);
                }
            }
            if (isset($input['syst_regions']) && count($input['syst_regions'])) {
                foreach ($input['syst_regions'] as $systRegion) {
                  \App\Models\SystRegion::find($systRegion['id'])->update(['syst_country_id' => $systCountry->id]);
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
          'PAISE almacenado!',
          $systCountry->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystCountry  $systCountry     * @return \Illuminate\Http\Response
     */
    public function show($systCountryId)
    {
        // user_can(['syst_country.show']);

        $systCountry = SystCountry::with(SystCountry::getRelationships())->findOrFail($systCountryId);

                        $systCountry->user_profile_ids = collect($systCountry->userProfiles)->pluck('id');
                                        $systCountry->syst_region_ids = collect($systCountry->systRegions)->pluck('id');
                        
        $resource = $systCountry->toArray();
        $resource['lists'] = SystCountry::getLists();

        return $this->responseSuccess(
          'PAISE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystCountry  $systCountry     * @return \Illuminate\Http\Response
     */
    public function edit($systCountryId)
    {
        // user_can(['syst_country.edit']);

        $systCountry = SystCountry::with(SystCountry::getRelationships())->findOrFail($systCountryId);
                        $systCountry->user_profile_ids = collect($systCountry->userProfiles)->pluck('id');
                                        $systCountry->syst_region_ids = collect($systCountry->systRegions)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar PAISE!',
          [
            'model' => $systCountry,
            'lists' => SystCountry::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystCountry  $systCountry	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systCountryId)
	{
        // user_can(['syst_country.duplicate']);

        $systCountry = SystCountry::with(SystCountry::getRelationships())->findOrFail($systCountryId);
        $systCountry->id = null;
                        $systCountry->user_profile_ids = collect($systCountry->userProfiles)->pluck('id');
                                        $systCountry->syst_region_ids = collect($systCountry->systRegions)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar PAISE!',
          [
            'model' => $systCountry,
            'lists' => SystCountry::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystCountry  $systCountry     * @return \Illuminate\Http\Response
     */
    public function update($systCountryId, Request $request)
    {

        // user_can(['syst_country.update']);

        $systCountry = SystCountry::findOrFail($systCountryId);

        $this->varidate($request, $systCountry);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //update data
          $systCountry->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systCountry);
          }

            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                \App\Models\UserProfile::where('syst_country_id', $systCountryId)
                    ->update(['syst_country_id' => null]);
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_country_id' => $systCountry->id]);
                }
            }
            if (isset($input['syst_regions']) && count($input['syst_regions'])) {
                \App\Models\SystRegion::where('syst_country_id', $systCountryId)
                    ->update(['syst_country_id' => null]);
                foreach ($input['syst_regions'] as $systRegion) {
                  \App\Models\SystRegion::find($systRegion['id'])->update(['syst_country_id' => $systCountry->id]);
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
          'PAISE actualizado!',
          $systCountry->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystCountry  $systCountry     * @return \Illuminate\Http\Response
     */
    public function destroy($systCountryId)
    {

        // user_can(['syst_country.destroy']);

        $systCountry = SystCountry::findOrFail($systCountryId);
        $systCountry->delete();
        return $this->responseSuccess(
          'PAISE eliminado!',
          $systCountry->toArray(),
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
    public function varidate(Request $request, SystCountry $systCountry = null)
    {
        $request->validate(SystCountry::getValidateRule($systCountry));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystCountry $systCountry)
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
            $systCountry->$method()->sync($pivotIds);
        }
    }


// end section

}
