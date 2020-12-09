<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Setting;
use App\SettingGroup;
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

        $settings = Setting::with('group');

        // (1)filltering
        $settings = $this->filtering($request, $settings);
        $settings = $settings->get();

        $resource = $settings->toArray();

        return $this->responseSuccess('OK', [
            'data' => $resource
        ]);
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
            'setting_group_id' => 'required',
            'name' => 'required',
            'value' => 'required',
            'rich_text' => 'nullable|boolean'
        ]);

        DB::beginTransaction();
        try {
            Setting::create($request->all());
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

        $thisSetting = Setting::with('group')->whereCode($setting)->first();

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
            'setting_group_id' => 'required',
            'name' => 'required',
            'value' => 'required',
            'rich_text' => 'nullable|boolean'
        ]);

        $thisSetting = Setting::whereCode($setting)->first();

        DB::beginTransaction();
        try {
            $thisSetting->update($request->all());
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Setting $setting)
    {
        //

        $thisSetting = Setting::whereCode($setting)->first();

        $thisSetting->delete();

        return $this->responseSuccess('OK', $thisSetting->toArray());
    }
}
