<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\CorrPacket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CorrPacketController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['corr_packet.index']);

		// $corrPackets = new CorrPacket;
		$corrPackets = CorrPacket::with(CorrPacket::getRelationships());

		// (1)filltering
        $corrPackets = $this->filtering($request, $corrPackets);
        $corrPackets = $corrPackets->get();

        // (2)sort
        $corrPackets = $this->sorting($request, $corrPackets);

        // (3)paginate
        $corrPackets = $corrPackets->paginate($request->get('per_page') ?? 10);

        $resource = $corrPackets->toArray();

        $resource['lists'] = CorrPacket::getLists();

        return $this->responseSuccess(
          'CORRESPONDENCIAPAQUETE obtenidos!',
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
        // user_can(['corr_packet.create']);

            return response()->json([
              'message' => 'Formulario para CORRESPONDENCIAPAQUETE obtenido!',
              'data' => null,
              'lists' => CorrPacket::getLists()
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
        // user_can(['corr_packet.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $corrPacket = CorrPacket::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $corrPacket);
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
          'CORRESPONDENCIAPAQUETE almacenado!',
          $corrPacket->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function show($corrPacketId)
    {
        // user_can(['corr_packet.show']);

        $corrPacket = CorrPacket::with(CorrPacket::getRelationships())->findOrFail($corrPacketId);

                                
        $resource = $corrPacket->toArray();
        $resource['lists'] = CorrPacket::getLists();

        return $this->responseSuccess(
          'CORRESPONDENCIAPAQUETE obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function edit($corrPacketId)
    {
        // user_can(['corr_packet.edit']);

        $corrPacket = CorrPacket::with(CorrPacket::getRelationships())->findOrFail($corrPacketId);
                                
        return $this->responseSuccess(
          'Formulario para CORRESPONDENCIAPAQUETE obtenidos!',
          [
            'model' => $corrPacket,
            'lists' => CorrPacket::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\CorrPacket  $corrPacket	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($corrPacketId)
	{
        // user_can(['corr_packet.duplicate']);

        $corrPacket = CorrPacket::with(CorrPacket::getRelationships())->findOrFail($corrPacketId);
        $corrPacket->id = null;
                                
        return $this->responseSuccess(
          'Formulario para CORRESPONDENCIAPAQUETE obtenidos!',
          [
            'model' => $corrPacket,
            'lists' => CorrPacket::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function update($corrPacketId, Request $request)
    {

        // user_can(['corr_packet.update']);

        $corrPacket = CorrPacket::findOrFail($corrPacketId);

        $this->varidate($request, $corrPacket);

        $input = $request->input('model');

                                                                                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $corrPacket->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $corrPacket);
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
          'CORRESPONDENCIAPAQUETE actualizado!',
          $corrPacket->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CorrPacket  $corrPacket     * @return \Illuminate\Http\Response
     */
    public function destroy($corrPacketId)
    {

        // user_can(['corr_packet.destroy']);

        $corrPacket = CorrPacket::findOrFail($corrPacketId);
        $corrPacket->delete();
        return $this->responseSuccess(
          'CORRESPONDENCIAPAQUETE eliminado!',
          $corrPacket->toArray(),
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
    public function varidate(Request $request, CorrPacket $corrPacket = null)
    {
        $request->validate(CorrPacket::getValidateRule($corrPacket));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, CorrPacket $corrPacket)
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
            $corrPacket->$method()->sync($pivotIds);
        }
    }

// end section

}
