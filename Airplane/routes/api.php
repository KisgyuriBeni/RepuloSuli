<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AirplaneController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\User_CourseController;

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
Route::get("courses", [CourseController::class, "getCourses"]);
Route::get("/airplanes", [AirplaneController::class, "getAirplanes"]);
Route::get("/users_courses", [User_CourseController::class, "getUsers_Courses"]);
