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
Route::get("/getOneUser",[UserController::class,"getUserById"]);
Route::delete("/userDelete", [UserController::class, "deleteUser"]);
Route::post("/userUpdate", [UserController::class, "updateUser"]);
Route::post("/userCreate", [UserController::class, "createUser"]);


Route::get("courses", [CourseController::class, "getCourses"]);
Route::get("/getOneCourse",[CourseController::class,"getCourseById"]);
Route::delete("/courseDelete", [CourseController::class, "deleteCourse"]);
Route::post("/courseUpdate", [CourseController::class, "updateCourse"]);
Route::post("/courseCreate", [CourseController::class, "createCourse"]);


Route::get("/airplanes", [AirplaneController::class, "getAirplanes"]);
Route::get("/getOneAirplane",[AirplaneController::class,"getAirplaneById"]);
Route::delete("/airplaneDelete", [AirplaneController::class, "deleteAirplane"]);
Route::post("/airplaneUpdate", [AirplaneController::class, "updateAirplane"]);
Route::post("/airplaneCreate", [AirplaneController::class, "createAirplane"]);


// Route::get("/user_courses", [UserCourseController::class, "getUsersCourses"]);
// Route::get("/user_courses/user/{userid}", [UserCourseController::class,"getByUserId"]);
// Route::get("/user_courses/course/{courseid}", [UserCourseController::class,"getByCourseId"]);
// Route::delete("/user_courses/user/delete", [UserCourseController::class, "deleteByUserId"]);
// Route::delete("/user_courses/course/delete", [UserCourseController::class, "deleteByCourseId"]);

// Route::post("/user_courses/create", [UserCourseController::class, "createNewUserCourses"]);




