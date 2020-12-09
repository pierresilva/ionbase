<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\SettingGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingGroupController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        //
        $settingGroups = SettingGroup::with('settings');

        // (1)filltering
        $settingGroups = $this->filtering($request, $settingGroups);
        $settingGroups = $settingGroups->get();

        $resource = $settingGroups->toArray();

        return $this->responseSuccess('OK', [
            'data' => $resource
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //

        $this->validate($request, [
            'name' => 'required',
        ]);

        DB::beginTransaction();
        try {
            SettingGroup::create($request->all());
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();

        return $this->responseSuccess('OK', []);

    }

    /**
     * Display the specified resource.
     *
     * @param string $settingGroup
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(string $settingGroup)
    {
        //
        $thisGroup = SettingGroup::with('settings')->whereCode($settingGroup)->first();

        return $this->responseSuccess('OK', $thisGroup);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $settingGroup
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Throwable
     */
    public function update(Request $request, string $settingGroup)
    {
        //
        $this->validate($request, [
            'name' => 'required'
        ]);
        $thisGroup = SettingGroup::whereCode($settingGroup)->find();
        DB::beginTransaction();
        try {
            // Database action
            $thisGroup->update($request->all());
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();

        return $this->responseSuccess('OK', $thisGroup->toArray());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $settingGroup
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(string $settingGroup)
    {
        //
        $thisGroup = SettingGroup::whereCode($settingGroup)->first();
        $thisGroup->delete();
        return $this->responseSuccess('OK', $thisGroup);
    }
}
