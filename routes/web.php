<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('{path?}', function () {
    try {
        $index = \File::get(public_path() . '/index.html');
    } catch (Exception $e) {
        return response()->json([
            'message' => 'No exste la aplicación angular!',
        ], 404);
    }
    return $index;
})->where("path", ".+");

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// generated section

Route::get("users/{user}/duplicate", ['as' => 'users.duplicate', 'uses' => 'UserController@duplicate']);
Route::resource("users","UserController");
Route::get("userProfiles/{userProfile}/duplicate", ['as' => 'userProfiles.duplicate', 'uses' => 'UserProfileController@duplicate']);
Route::resource("userProfiles","UserProfileController");
Route::get("systCities/{systCity}/duplicate", ['as' => 'systCities.duplicate', 'uses' => 'SystCityController@duplicate']);
Route::resource("systCities","SystCityController");
Route::get("systRegions/{systRegion}/duplicate", ['as' => 'systRegions.duplicate', 'uses' => 'SystRegionController@duplicate']);
Route::resource("systRegions","SystRegionController");
Route::get("systCountries/{systCountry}/duplicate", ['as' => 'systCountries.duplicate', 'uses' => 'SystCountryController@duplicate']);
Route::resource("systCountries","SystCountryController");
Route::get("companies/{company}/duplicate", ['as' => 'companies.duplicate', 'uses' => 'CompanyController@duplicate']);
Route::resource("companies","CompanyController");
Route::get("compPhones/{compPhone}/duplicate", ['as' => 'compPhones.duplicate', 'uses' => 'CompPhoneController@duplicate']);
Route::resource("compPhones","CompPhoneController");
Route::get("compAddresses/{compAddress}/duplicate", ['as' => 'compAddresses.duplicate', 'uses' => 'CompAddressController@duplicate']);
Route::resource("compAddresses","CompAddressController");
Route::get("compContacts/{compContact}/duplicate", ['as' => 'compContacts.duplicate', 'uses' => 'CompContactController@duplicate']);
Route::resource("compContacts","CompContactController");
Route::get("systPositions/{systPosition}/duplicate", ['as' => 'systPositions.duplicate', 'uses' => 'SystPositionController@duplicate']);
Route::resource("systPositions","SystPositionController");
Route::get("systParameters/{systParameter}/duplicate", ['as' => 'systParameters.duplicate', 'uses' => 'SystParameterController@duplicate']);
Route::resource("systParameters","SystParameterController");
Route::get("systParameterGroups/{systParameterGroup}/duplicate", ['as' => 'systParameterGroups.duplicate', 'uses' => 'SystParameterGroupController@duplicate']);
Route::resource("systParameterGroups","SystParameterGroupController");
Route::get("compResponsabilities/{compResponsability}/duplicate", ['as' => 'compResponsabilities.duplicate', 'uses' => 'CompResponsabilityController@duplicate']);
Route::resource("compResponsabilities","CompResponsabilityController");
Route::get("housUnits/{housUnit}/duplicate", ['as' => 'housUnits.duplicate', 'uses' => 'HousUnitController@duplicate']);
Route::resource("housUnits","HousUnitController");
Route::get("housUnitAreas/{housUnitArea}/duplicate", ['as' => 'housUnitAreas.duplicate', 'uses' => 'HousUnitAreaController@duplicate']);
Route::resource("housUnitAreas","HousUnitAreaController");
Route::get("operSectors/{operSector}/duplicate", ['as' => 'operSectors.duplicate', 'uses' => 'OperSectorController@duplicate']);
Route::resource("operSectors","OperSectorController");
Route::get("counMeetings/{counMeeting}/duplicate", ['as' => 'counMeetings.duplicate', 'uses' => 'CounMeetingController@duplicate']);
Route::resource("counMeetings","CounMeetingController");
Route::get("counMeetingAgendas/{counMeetingAgenda}/duplicate", ['as' => 'counMeetingAgendas.duplicate', 'uses' => 'CounMeetingAgendaController@duplicate']);
Route::resource("counMeetingAgendas","CounMeetingAgendaController");
Route::get("counMeetingCitations/{counMeetingCitation}/duplicate", ['as' => 'counMeetingCitations.duplicate', 'uses' => 'CounMeetingCitationController@duplicate']);
Route::resource("counMeetingCitations","CounMeetingCitationController");
Route::get("operSchedules/{operSchedule}/duplicate", ['as' => 'operSchedules.duplicate', 'uses' => 'OperScheduleController@duplicate']);
Route::resource("operSchedules","OperScheduleController");
Route::get("operContractors/{operContractor}/duplicate", ['as' => 'operContractors.duplicate', 'uses' => 'OperContractorController@duplicate']);
Route::resource("operContractors","OperContractorController");
Route::get("operMovements/{operMovement}/duplicate", ['as' => 'operMovements.duplicate', 'uses' => 'OperMovementController@duplicate']);
Route::resource("operMovements","OperMovementController");
Route::get("counMembers/{counMember}/duplicate", ['as' => 'counMembers.duplicate', 'uses' => 'CounMemberController@duplicate']);
Route::resource("counMembers","CounMemberController");
Route::get("mailTemplates/{mailTemplate}/duplicate", ['as' => 'mailTemplates.duplicate', 'uses' => 'MailTemplateController@duplicate']);
Route::resource("mailTemplates","MailTemplateController");
Route::get("mails/{mail}/duplicate", ['as' => 'mails.duplicate', 'uses' => 'MailController@duplicate']);
Route::resource("mails","MailController");
Route::get("files/{file}/duplicate", ['as' => 'files.duplicate', 'uses' => 'FileController@duplicate']);
Route::resource("files","FileController");
Route::get("corrPackets/{corrPacket}/duplicate", ['as' => 'corrPackets.duplicate', 'uses' => 'CorrPacketController@duplicate']);
Route::resource("corrPackets","CorrPacketController");
Route::get("settings/{setting}/duplicate", ['as' => 'settings.duplicate', 'uses' => 'SettingController@duplicate']);
Route::resource("settings","SettingController");
Route::get("settingGroups/{settingGroup}/duplicate", ['as' => 'settingGroups.duplicate', 'uses' => 'SettingGroupController@duplicate']);
Route::resource("settingGroups","SettingGroupController");
Route::get("userRoles/{userRole}/duplicate", ['as' => 'userRoles.duplicate', 'uses' => 'UserRoleController@duplicate']);
Route::resource("userRoles","UserRoleController");
Route::get("userPermissions/{userPermission}/duplicate", ['as' => 'userPermissions.duplicate', 'uses' => 'UserPermissionController@duplicate']);
Route::resource("userPermissions","UserPermissionController");


// end section


