<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
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

//login
Route::group(["middleware" => ["auth:sanctum"]], function() {
    Route::post("/logout", [AuthController::class, "logout"]);
    Route::get("/oneuser/{id}",[UserController::class,"getUserById"]);
    Route::post("/userupdate", [UserController::class, "updateUser"]);
    Route::post("/attach", [UserController::class, "attach"]);
    Route::post("/detach", [UserController::class, "detach"]);
    Route::post("/modifypassword", [AuthController::class, "modifyPassword"]);
    Route::delete("/userdelete", [UserController::class, "deleteUser"]);

});


//admin
Route::get("/users", [UserController::class, "getUsers"]);

Route::delete("/coursedelete", [CourseController::class, "deleteCourse"]);
Route::post("/coursecreate", [CourseController::class, "createCourse"]);
Route::post("/courseupdate", [CourseController::class, "updateCourse"]);

Route::post("/airplaneupdate", [AirplaneController::class, "updateAirplane"]);
Route::delete("/airplanedelete", [AirplaneController::class, "deleteAirplane"]);
Route::post("/airplanecreate", [AirplaneController::class, "createAirplane"]);

//public
Route::post("/register", [AuthController::class, "register"])->middleware("throttle:100, 43200");
Route::post("/login", [AuthController::class, "login"])->middleware("throttle:100, 43200");

Route::get("courses", [CourseController::class, "getCourses"]);
Route::get("/onecourse/{id}",[CourseController::class,"getCourseById"]);

Route::get("/airplanes", [AirplaneController::class, "getAirplanes"]);
Route::get("/oneairplane/{id}",[AirplaneController::class,"getAirplaneById"]);





