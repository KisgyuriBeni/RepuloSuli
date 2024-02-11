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
Route::get("/users/{userid}",[UserController::class,"getUserById"]);
Route::delete("/users/delete", [UserController::class, "deleteUser"]);
Route::post("/users/update", [UserController::class, "updateUser"]);


Route::get("courses", [CourseController::class, "getCourses"]);


Route::get("/airplanes", [AirplaneController::class, "getAirplanes"]);
Route::get("/airplanes/{airplaneid}",[AirplaneController::class,"getAirplaneById"]);
Route::delete("/airplanes/delete", [AirplaneController::class, "deleteAirplane"]);
Route::post("/airplanes/update", [AirplaneController::class, "updateAirplane"]);


Route::get("/users_courses", [UserCourseController::class, "getUsersCourses"]);



