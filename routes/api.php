<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('facade', function () {
    return \Settings::getGroup();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('drive/upload', 'Api\DriveController@store');
Route::delete('drive/delete/{id}', 'Api\DriveController@destroy');
Route::get('syst-parameters/all', 'Api\SystParameterController@getAll');

Route::post('coun-meeting-custom', 'Api\CounMeetingController@saveCustom');
Route::put('coun-meeting-custom/{id}', 'Api\CounMeetingController@updateCustom');
Route::get('coun-meeting-pdf/{id}', 'Api\CounMeetingController@generatePdf');
Route::put('coun-meeting-citations/sign', 'Api\CounMeetingCitationController@sign');
Route::post('coun-meetings/finalize', 'Api\CounMeetingController@finalize');

Route::resource("setting-groups","Api\SettingGroupController");
Route::resource("settings","Api\SettingController");

Route::post('auth/register', 'Api\AuthController@register');
Route::post('auth/login', 'Api\AuthController@login');
Route::get('auth/logout', 'Api\AuthController@logout');
Route::get('auth/refresh', 'Api\AuthController@refresh');
Route::get('auth/profile', 'Api\AuthController@profile');

Route::get('auth/reset-password/{token}', 'Api\AuthController@passwordFindReset');
Route::put('auth/reset-password', 'Api\AuthController@passwordReset');
Route::post('auth/reset-password', 'Api\AuthController@passwordRecover');

Route::get('auth/email/verify/{id}', 'Api\AuthController@verifyEmail')->name('verification.verify');
Route::post('auth/email/resend', 'Api\AuthController@resendVerifyEmail')->name('verification.send');


// generated section

Route::get("users/{userId}/duplicate", ['as' => 'api.users.duplicate', 'uses' => 'Api\UserController@duplicate']);
Route::resource("users","Api\UserController");
Route::get("user-profiles/{userProfileId}/duplicate", ['as' => 'api.user-profiles.duplicate', 'uses' => 'Api\UserProfileController@duplicate']);
Route::resource("user-profiles","Api\UserProfileController");
Route::get("syst-cities/{systCityId}/duplicate", ['as' => 'api.syst-cities.duplicate', 'uses' => 'Api\SystCityController@duplicate']);
Route::resource("syst-cities","Api\SystCityController");
Route::get("syst-regions/{systRegionId}/duplicate", ['as' => 'api.syst-regions.duplicate', 'uses' => 'Api\SystRegionController@duplicate']);
Route::resource("syst-regions","Api\SystRegionController");
Route::get("syst-countries/{systCountryId}/duplicate", ['as' => 'api.syst-countries.duplicate', 'uses' => 'Api\SystCountryController@duplicate']);
Route::resource("syst-countries","Api\SystCountryController");
Route::get("companies/{companyId}/duplicate", ['as' => 'api.companies.duplicate', 'uses' => 'Api\CompanyController@duplicate']);
Route::resource("companies","Api\CompanyController");
Route::get("comp-phones/{compPhoneId}/duplicate", ['as' => 'api.comp-phones.duplicate', 'uses' => 'Api\CompPhoneController@duplicate']);
Route::resource("comp-phones","Api\CompPhoneController");
Route::get("comp-addresses/{compAddressId}/duplicate", ['as' => 'api.comp-addresses.duplicate', 'uses' => 'Api\CompAddressController@duplicate']);
Route::resource("comp-addresses","Api\CompAddressController");
Route::get("comp-contacts/{compContactId}/duplicate", ['as' => 'api.comp-contacts.duplicate', 'uses' => 'Api\CompContactController@duplicate']);
Route::resource("comp-contacts","Api\CompContactController");
Route::get("syst-positions/{systPositionId}/duplicate", ['as' => 'api.syst-positions.duplicate', 'uses' => 'Api\SystPositionController@duplicate']);
Route::resource("syst-positions","Api\SystPositionController");
Route::get("syst-parameters/{systParameterId}/duplicate", ['as' => 'api.syst-parameters.duplicate', 'uses' => 'Api\SystParameterController@duplicate']);
Route::resource("syst-parameters","Api\SystParameterController");
Route::get("syst-parameter-groups/{systParameterGroupId}/duplicate", ['as' => 'api.syst-parameter-groups.duplicate', 'uses' => 'Api\SystParameterGroupController@duplicate']);
Route::resource("syst-parameter-groups","Api\SystParameterGroupController");
Route::get("comp-responsabilities/{compResponsabilityId}/duplicate", ['as' => 'api.comp-responsabilities.duplicate', 'uses' => 'Api\CompResponsabilityController@duplicate']);
Route::resource("comp-responsabilities","Api\CompResponsabilityController");
Route::get("hous-units/{housUnitId}/duplicate", ['as' => 'api.hous-units.duplicate', 'uses' => 'Api\HousUnitController@duplicate']);
Route::resource("hous-units","Api\HousUnitController");
Route::get("hous-unit-areas/{housUnitAreaId}/duplicate", ['as' => 'api.hous-unit-areas.duplicate', 'uses' => 'Api\HousUnitAreaController@duplicate']);
Route::resource("hous-unit-areas","Api\HousUnitAreaController");
Route::get("oper-sectors/{operSectorId}/duplicate", ['as' => 'api.oper-sectors.duplicate', 'uses' => 'Api\OperSectorController@duplicate']);
Route::resource("oper-sectors","Api\OperSectorController");
Route::get("coun-meetings/{counMeetingId}/duplicate", ['as' => 'api.coun-meetings.duplicate', 'uses' => 'Api\CounMeetingController@duplicate']);
Route::resource("coun-meetings","Api\CounMeetingController");
Route::get("coun-meeting-agendas/{counMeetingAgendaId}/duplicate", ['as' => 'api.coun-meeting-agendas.duplicate', 'uses' => 'Api\CounMeetingAgendaController@duplicate']);
Route::resource("coun-meeting-agendas","Api\CounMeetingAgendaController");
Route::get("coun-meeting-citations/{counMeetingCitationId}/duplicate", ['as' => 'api.coun-meeting-citations.duplicate', 'uses' => 'Api\CounMeetingCitationController@duplicate']);
Route::resource("coun-meeting-citations","Api\CounMeetingCitationController");
Route::get("oper-schedules/{operScheduleId}/duplicate", ['as' => 'api.oper-schedules.duplicate', 'uses' => 'Api\OperScheduleController@duplicate']);
Route::resource("oper-schedules","Api\OperScheduleController");
Route::get("oper-contractors/{operContractorId}/duplicate", ['as' => 'api.oper-contractors.duplicate', 'uses' => 'Api\OperContractorController@duplicate']);
Route::resource("oper-contractors","Api\OperContractorController");
Route::get("oper-movements/{operMovementId}/duplicate", ['as' => 'api.oper-movements.duplicate', 'uses' => 'Api\OperMovementController@duplicate']);
Route::resource("oper-movements","Api\OperMovementController");
Route::get("coun-members/{counMemberId}/duplicate", ['as' => 'api.coun-members.duplicate', 'uses' => 'Api\CounMemberController@duplicate']);
Route::resource("coun-members","Api\CounMemberController");
Route::get("mail-templates/{mailTemplateId}/duplicate", ['as' => 'api.mail-templates.duplicate', 'uses' => 'Api\MailTemplateController@duplicate']);
Route::resource("mail-templates","Api\MailTemplateController");
Route::get("mails/{mailId}/duplicate", ['as' => 'api.mails.duplicate', 'uses' => 'Api\MailController@duplicate']);
Route::resource("mails","Api\MailController");
Route::get("files/{fileId}/duplicate", ['as' => 'api.files.duplicate', 'uses' => 'Api\FileController@duplicate']);
Route::resource("files","Api\FileController");
Route::get("corr-packets/{corrPacketId}/duplicate", ['as' => 'api.corr-packets.duplicate', 'uses' => 'Api\CorrPacketController@duplicate']);
Route::resource("corr-packets","Api\CorrPacketController");


// end section
