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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// generated section

Route::get("users/{userId}/duplicate", ['as' => 'api.users.duplicate', 'uses' => 'Api\UserController@duplicate']);
Route::resource("users","Api\UserController");
Route::get("categories/{categoryId}/duplicate", ['as' => 'api.categories.duplicate', 'uses' => 'Api\CategoryController@duplicate']);
Route::resource("categories","Api\CategoryController");
Route::get("tags/{tagId}/duplicate", ['as' => 'api.tags.duplicate', 'uses' => 'Api\TagController@duplicate']);
Route::resource("tags","Api\TagController");
Route::get("posts/{postId}/duplicate", ['as' => 'api.posts.duplicate', 'uses' => 'Api\PostController@duplicate']);
Route::resource("posts","Api\PostController");
Route::get("comments/{commentId}/duplicate", ['as' => 'api.comments.duplicate', 'uses' => 'Api\CommentController@duplicate']);
Route::resource("comments","Api\CommentController");
Route::get("images/{imageId}/duplicate", ['as' => 'api.images.duplicate', 'uses' => 'Api\ImageController@duplicate']);
Route::resource("images","Api\ImageController");
Route::get("roles/{roleId}/duplicate", ['as' => 'api.roles.duplicate', 'uses' => 'Api\RoleController@duplicate']);
Route::resource("roles","Api\RoleController");
Route::get("permissions/{permissionId}/duplicate", ['as' => 'api.permissions.duplicate', 'uses' => 'Api\PermissionController@duplicate']);
Route::resource("permissions","Api\PermissionController");


// end section
