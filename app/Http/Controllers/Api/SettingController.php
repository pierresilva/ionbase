<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        //

        $settings = Setting::with('settingGroup');

        // (1)filltering
        $settings = $this->filtering($request, $settings);
        $settings = $settings->get();

        $resource['data'] = $settings->toArray();

        $resource['lists'] = Setting::getLists();

        return $this->responseSuccess('OK', $resource);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        //
        $this->validate($request, [
            'model.setting_group_id' => 'required',
            'model.name' => 'required',
            'model.value' => 'required',
            'model.rich_text' => 'nullable|boolean'
        ]);

        DB::beginTransaction();
        try {
            Setting::create($request->all()['model']);
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();


        return $this->responseSuccess('OK');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($setting)
    {
        //

        $thisSetting = Setting::with('settingGroup')->whereCode($setting)->first();

        return $this->responseSuccess('OK', $thisSetting);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $setting)
    {
        //
        $this->validate($request, [
            'model.setting_group_id' => 'required',
            'model.name' => 'required',
            'model.value' => 'required',
            'model.rich_text' => 'nullable|boolean'
        ]);

        $thisSetting = Setting::whereCode($setting)->orWhere('id', $setting)->first();

        DB::beginTransaction();
        try {
            $thisSetting->update($request->all()['model']);
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();

        return $this->responseSuccess('OK', $thisSetting);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($setting)
    {
        //

        $thisSetting = Setting::whereCode($setting)->orWhere('id', $setting)->first();

        $thisSetting->delete();

        return $this->responseSuccess('OK', $thisSetting->toArray());
    }

    public function create()
    {
        // user_can(['syst_city.create']);

        return response()->json([
            'message' => 'Formulario para crear ajustes!',
            'data' => null,
            'lists' => Setting::getLists()
        ]);
    }

    public function edit($settingId)
    {
        // user_can(['setting_group.edit']);

        $setting = Setting::with(Setting::getRelationships())->findOrFail($settingId);

        return $this->responseSuccess(
            'Formulario para editar ajustes!',
            [
                'model' => $setting,
                'lists' => Setting::getLists(),
            ],
            false
        );
    }
}
