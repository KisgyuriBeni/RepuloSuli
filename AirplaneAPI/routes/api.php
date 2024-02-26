<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

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
Route::post("/userupdate", [UserController::class, "updateUser"]);
Route::delete("/userdelete", [UserController::class, "deleteUser"]);

Route::post("/register", [AuthController::class, "register"])->middleware("throttle:100, 43200");
Route::post("/login", [AuthController::class, "login"])->middleware("throttle:100, 43200");
Route::post("/logout", [AuthController::class, "logout"]);
