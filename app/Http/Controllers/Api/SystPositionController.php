<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\SystPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SystPositionController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['syst_position.index']);

		// $systPositions = new SystPosition;
	    $systPositions = SystPosition::with(SystPosition::getRelationships());

		// (1)filltering
        $systPositions = $this->filtering($request, $systPositions);
        $systPositions = $systPositions->get();

        // (2)sort
        $systPositions = $this->sorting($request, $systPositions);

        // (3)paginate
        $systPositions = $systPositions->paginate($request->get('per_page') ?? 10);

        $resource = $systPositions->toArray();

        $resource['lists'] = SystPosition::getLists();

        return $this->responseSuccess(
          'CARGO obtenidos!',
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
        // user_can(['syst_position.create']);

            return response()->json([
              'message' => 'Formulario para crear CARGO!',
              'data' => null,
              'lists' => SystPosition::getLists()
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
        // user_can(['syst_position.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //create data
          $systPosition = SystPosition::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $systPosition);
          }
            if (isset($input['users']) && count($input['users'])) {
                foreach ($input['users'] as $user) {
                  \App\Models\User::find($user['id'])->update(['syst_position_id' => $systPosition->id]);
                }
            }
            if (isset($input['comp_contacts']) && count($input['comp_contacts'])) {
                foreach ($input['comp_contacts'] as $compContact) {
                  \App\Models\CompContact::find($compContact['id'])->update(['syst_position_id' => $systPosition->id]);
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
          'CARGO almacenado!',
          $systPosition->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function show($systPositionId)
    {
        // user_can(['syst_position.show']);

        $systPosition = SystPosition::with(SystPosition::getRelationships())->findOrFail($systPositionId);

                        $systPosition->user_ids = collect($systPosition->users)->pluck('id');
                                        $systPosition->comp_contact_ids = collect($systPosition->compContacts)->pluck('id');
                        
        $resource = $systPosition->toArray();
        $resource['lists'] = SystPosition::getLists();

        return $this->responseSuccess(
          'CARGO obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function edit($systPositionId)
    {
        // user_can(['syst_position.edit']);

        $systPosition = SystPosition::with(SystPosition::getRelationships())->findOrFail($systPositionId);
                        $systPosition->user_ids = collect($systPosition->users)->pluck('id');
                                        $systPosition->comp_contact_ids = collect($systPosition->compContacts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar CARGO!',
          [
            'model' => $systPosition,
            'lists' => SystPosition::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\SystPosition  $systPosition	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($systPositionId)
	{
        // user_can(['syst_position.duplicate']);

        $systPosition = SystPosition::with(SystPosition::getRelationships())->findOrFail($systPositionId);
        $systPosition->id = null;
                        $systPosition->user_ids = collect($systPosition->users)->pluck('id');
                                        $systPosition->comp_contact_ids = collect($systPosition->compContacts)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar CARGO!',
          [
            'model' => $systPosition,
            'lists' => SystPosition::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function update($systPositionId, Request $request)
    {

        // user_can(['syst_position.update']);

        $systPosition = SystPosition::findOrFail($systPositionId);

        $this->varidate($request, $systPosition);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //update data
          $systPosition->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $systPosition);
          }

            if (isset($input['users']) && count($input['users'])) {
                \App\Models\User::where('syst_position_id', $systPositionId)
                    ->update(['syst_position_id' => null]);
                foreach ($input['users'] as $user) {
                  \App\Models\User::find($user['id'])->update(['syst_position_id' => $systPosition->id]);
                }
            }
            if (isset($input['comp_contacts']) && count($input['comp_contacts'])) {
                \App\Models\CompContact::where('syst_position_id', $systPositionId)
                    ->update(['syst_position_id' => null]);
                foreach ($input['comp_contacts'] as $compContact) {
                  \App\Models\CompContact::find($compContact['id'])->update(['syst_position_id' => $systPosition->id]);
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
          'CARGO actualizado!',
          $systPosition->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SystPosition  $systPosition     * @return \Illuminate\Http\Response
     */
    public function destroy($systPositionId)
    {

        // user_can(['syst_position.destroy']);

        $systPosition = SystPosition::findOrFail($systPositionId);
        $systPosition->delete();
        return $this->responseSuccess(
          'CARGO eliminado!',
          $systPosition->toArray(),
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
    public function varidate(Request $request, SystPosition $systPosition = null)
    {
        $request->validate(SystPosition::getValidateRule($systPosition));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, SystPosition $systPosition)
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
            $systPosition->$method()->sync($pivotIds);
        }
    }


// end section

}
