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

Route::group(["middleware" => ["auth:sanctum"]], function() {
    Route::post("/logout", [AuthController::class, "logout"]);
    Route::get("/oneuser",[UserController::class,"getUserById"]);
    Route::post("/attach", [UserController::class, "attach"]);
    Route::post("/detach", [UserController::class, "detach"]);
});

Route::get("/users", [UserController::class, "getUsers"]);
Route::post("/userupdate", [UserController::class, "updateUser"]);
Route::delete("/userdelete", [UserController::class, "deleteUser"]);

Route::post("/register", [AuthController::class, "register"])->middleware("throttle:100, 43200");
Route::post("/login", [AuthController::class, "login"])->middleware("throttle:100, 43200");



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
