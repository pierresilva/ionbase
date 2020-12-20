<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\OperItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OperItemController extends ApiController
{

// generated section
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['oper_item.index']);

		// $operItems = new OperItem;
		$operItems = OperItem::with(OperItem::getRelationships());

		// (1)filltering
        $operItems = $this->filtering($request, $operItems);
        $operItems = $operItems->get();

        // (2)sort
        $operItems = $this->sorting($request, $operItems);

        // (3)paginate
        $operItems = $operItems->paginate($request->get('per_page') ?? 10);

        $resource = $operItems->toArray();

        $resource['lists'] = OperItem::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADITEMSMTTOCORRECTIVO obtenidos!',
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
        // user_can(['oper_item.create']);

            return response()->json([
              'message' => 'Formulario para OPERATIVIDADITEMSMTTOCORRECTIVO obtenido!',
              'data' => null,
              'lists' => OperItem::getLists()
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
        // user_can(['oper_item.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //create data
          $operItem = OperItem::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $operItem);
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
          'OPERATIVIDADITEMSMTTOCORRECTIVO almacenado!',
          $operItem->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function show($operItemId)
    {
        // user_can(['oper_item.show']);

        $operItem = OperItem::with(OperItem::getRelationships())->findOrFail($operItemId);

                                $operItem->oper_corrective_maintenance_ids = collect($operItem->operCorrectiveMaintenances)->pluck('id');
                
        $resource = $operItem->toArray();
        $resource['lists'] = OperItem::getLists();

        return $this->responseSuccess(
          'OPERATIVIDADITEMSMTTOCORRECTIVO obtenidos!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function edit($operItemId)
    {
        // user_can(['oper_item.edit']);

        $operItem = OperItem::with(OperItem::getRelationships())->findOrFail($operItemId);
                                $operItem->oper_corrective_maintenance_ids = collect($operItem->operCorrectiveMaintenances)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADITEMSMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operItem,
            'lists' => OperItem::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\OperItem  $operItem	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($operItemId)
	{
        // user_can(['oper_item.duplicate']);

        $operItem = OperItem::with(OperItem::getRelationships())->findOrFail($operItemId);
        $operItem->id = null;
                                $operItem->oper_corrective_maintenance_ids = collect($operItem->operCorrectiveMaintenances)->pluck('id');
                
        return $this->responseSuccess(
          'Formulario para OPERATIVIDADITEMSMTTOCORRECTIVO obtenidos!',
          [
            'model' => $operItem,
            'lists' => OperItem::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function update($operItemId, Request $request)
    {

        // user_can(['oper_item.update']);

        $operItem = OperItem::findOrFail($operItemId);

        $this->varidate($request, $operItem);

        $input = $request->input('model');

                                        
        DB::beginTransaction();
        try {
          //update data
          $operItem->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $operItem);
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
          'OPERATIVIDADITEMSMTTOCORRECTIVO actualizado!',
          $operItem->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OperItem  $operItem     * @return \Illuminate\Http\Response
     */
    public function destroy($operItemId)
    {

        // user_can(['oper_item.destroy']);

        $operItem = OperItem::findOrFail($operItemId);
        $operItem->delete();
        return $this->responseSuccess(
          'OPERATIVIDADITEMSMTTOCORRECTIVO eliminado!',
          $operItem->toArray(),
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
    public function varidate(Request $request, OperItem $operItem = null)
    {
        $request->validate(OperItem::getValidateRule($operItem));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, OperItem $operItem)
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
            $operItem->$method()->sync($pivotIds);
        }
    }

// end section

}
