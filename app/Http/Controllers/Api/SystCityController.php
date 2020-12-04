<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystCity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystCityController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_city.index']);

		// $systCities = new SystCity;
	    $systCities = SystCity::with(SystCity::getRelationships());

		// (1)filltering
        $systCities = $this->filtering($request, $systCities);
        $systCities = $systCities->get();

        // (2)sort
        $systCities = $this->sorting($request, $systCities);

        // (3)paginate
        $systCities = $systCities->paginate($request->get('per_page') ?? 10);

        $resource = $systCities->toArray();

        $resource['lists'] = SystCity::getLists();

        return $this->responseSuccess(
          'CIUDADE obtenidos!',
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
        // user_can(['syst_city.create']);

            return response()->json([
              'message' => 'Formulario para crear CIUDADE!',
              'data' => null,
              'lists' => SystCity::getLists()
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
        // user_can(['syst_city.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //create data
          $systCity = SystCity::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systCity);
          }
            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_city_id' => $systCity->id]);
                }
            }
            if (isset($input['comp_addresses']) && count($input['comp_addresses'])) {
                foreach ($input['comp_addresses'] as $compAddress) {
                  \App\Models\CompAddress::find($compAddress['id'])->update(['syst_city_id' => $systCity->id]);
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
          'CIUDADE almacenado!',
          $systCity->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function show($systCityId)
    {
        // user_can(['syst_city.show']);

        $systCity = SystCity::with(SystCity::getRelationships())->findOrFail($systCityId);

                        $systCity->user_profile_ids = collect($systCity->userProfiles)->pluck('id');
                                                                $systCity->comp_address_ids = collect($systCity->compAddresses)->pluck('id');
                        
        $resource = $systCity->toArray();
        $resource['lists'] = SystCity::getLists();

        return $this->responseSuccess(
          'CIUDADE obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function edit($systCityId)
    {
        // user_can(['syst_city.edit']);

        $systCity = SystCity::with(SystCity::getRelationships())->findOrFail($systCityId);
                        $systCity->user_profile_ids = collect($systCity->userProfiles)->pluck('id');
                                                                $systCity->comp_address_ids = collect($systCity->compAddresses)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar CIUDADE!',
          [
            'model' => $systCity,
            'lists' => SystCity::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystCity  $systCity	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systCityId)
	{
        // user_can(['syst_city.duplicate']);

        $systCity = SystCity::with(SystCity::getRelationships())->findOrFail($systCityId);
        $systCity->id = null;
                        $systCity->user_profile_ids = collect($systCity->userProfiles)->pluck('id');
                                                                $systCity->comp_address_ids = collect($systCity->compAddresses)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar CIUDADE!',
          [
            'model' => $systCity,
            'lists' => SystCity::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function update($systCityId, Request $request)
    {

        // user_can(['syst_city.update']);

        $systCity = SystCity::findOrFail($systCityId);

        $this->varidate($request, $systCity);

        $input = $request->input('model');

                                                        
        DB::beginTransaction();
        try {
          //update data
          $systCity->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systCity);
          }

            if (isset($input['user_profiles']) && count($input['user_profiles'])) {
                \App\Models\UserProfile::where('syst_city_id', $systCityId)
                    ->update(['syst_city_id' => null]);
                foreach ($input['user_profiles'] as $userProfile) {
                  \App\Models\UserProfile::find($userProfile['id'])->update(['syst_city_id' => $systCity->id]);
                }
            }
            if (isset($input['comp_addresses']) && count($input['comp_addresses'])) {
                \App\Models\CompAddress::where('syst_city_id', $systCityId)
                    ->update(['syst_city_id' => null]);
                foreach ($input['comp_addresses'] as $compAddress) {
                  \App\Models\CompAddress::find($compAddress['id'])->update(['syst_city_id' => $systCity->id]);
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
          'CIUDADE actualizado!',
          $systCity->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystCity  $systCity     * @return \Illuminate\Http\Response
     */
    public function destroy($systCityId)
    {

        // user_can(['syst_city.destroy']);

        $systCity = SystCity::findOrFail($systCityId);
        $systCity->delete();
        return $this->responseSuccess(
          'CIUDADE eliminado!',
          $systCity->toArray(),
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
    public function varidate(Request $request, SystCity $systCity = null)
    {
        $request->validate(SystCity::getValidateRule($systCity));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystCity $systCity)
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
            $systCity->$method()->sync($pivotIds);
        }
    }


// end section

}
