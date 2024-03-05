<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRegisterChecker;
use App\Http\Requests\UserCourseChecker;
use App\Http\Controllers\ResponseController;
use Illuminate\Support\Facades\Auth;



class UserController extends ResponseController {
    
    public function getUsers() {


        if(auth("sanctum")->user()->is_admin==1) {

            $users = User::with("courses")->get();
        return $users;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };

        
    
    }

    public function getUserById(Request $request) {
        $user = User::find($request["id"]);

        return $user->with("courses")->get();;
        
    }

    public function deleteUser(Request $request) {

            $user = User::find($request["id"]);
            $user->courses()->detach();

            $user->delete();
            return $user;
    }

    public function updateUser(Request $request) {

       

        $user = User::find($request["id"]);
        $user -> user_name = $request["user_name"];
        $user -> email = $request["email"];
        $user -> phone_number = $request["phone_number"];
        $user -> password = $request["password"];
        $user -> first_name = $request["first_name"];
        $user -> last_name = $request["last_name"];
        $user -> mothers_name = $request["mothers_name"];
        $user -> address = $request["address"];
        $user -> birth_day = $request["birth_day"];
        
        $user -> save();
        return $user;

    }

    public function attach(Request $request) {
        $phone_number = auth("sanctum")->user()->phone_number;
        $first_name=auth("sanctum")->user()->first_name;
        $last_name=auth("sanctum")->user()->last_name;
        $mothers_name=auth("sanctum")->user()->mothers_name;
        $address=auth("sanctum")->user()->address;
        $birth_day=auth("sanctum")->user()->birth_day;

        if(is_null($phone_number) || is_null($first_name) || is_null($last_name) || is_null($mothers_name) || is_null($address) || is_null($birth_day) ) {

            return $this->sendError("Sikertelen azonosítás", 401);
        } else {

        $user = User::find($request["user_id"]);
        $user->courses()->attach($request["course_id"]);

        $success["user_name"] = $user->user_name;
        return $this->sendResponse($success, "Sikeres összekapcsolás");
        }
        
    }

    public function detach(Request $request) {
        $user = User::find($request["user_id"]);
        $user->courses()->detach($request["course_id"]);

        $success["user_name"] = $user->user_name;
        return $this->sendResponse($success, "Sikeres leválasztás");
    }

}

    



