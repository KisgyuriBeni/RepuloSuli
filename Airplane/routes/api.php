<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AirplaneController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserCourseController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/users", [UserController::class, "getUsers"]);
Route::get("/oneuser",[UserController::class,"getUserById"]);
Route::post("/usercreate", [UserController::class, "createUser"]);
Route::post("/userupdate", [UserController::class, "updateUser"]);
Route::delete("/userdelete", [UserController::class, "deleteUser"]);



Route::get("courses", [CourseController::class, "getCourses"]);
Route::get("/onecourse",[CourseController::class,"getCourseById"]);
Route::post("/coursecreate", [CourseController::class, "createCourse"]);
Route::post("/courseupdate", [CourseController::class, "updateCourse"]);
Route::delete("/coursedelete", [CourseController::class, "deleteCourse"]);



Route::get("/airplanes", [AirplaneController::class, "getAirplanes"]);
Route::get("/oneairplane",[AirplaneController::class,"getAirplaneById"]);
Route::post("/airplanecreate", [AirplaneController::class, "createAirplane"]);
Route::post("/airplaneupdate", [AirplaneController::class, "updateAirplane"]);
Route::delete("/airplanedelete", [AirplaneController::class, "deleteAirplane"]);

Route::post("/store", [UserController::class, "store"]);
Route::post("/detach", [UserController::class, "detach"]);




