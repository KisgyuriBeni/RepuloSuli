<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRegisterChecker;
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

        if(auth("sanctum")->user()->is_admin==1) {

            $user = User::find($request["id"]);
            $user->courses()->detach();

            $user->delete();
            return $user;
        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };
        
        
        

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
        $user = User::find($request["user_id"]);
        $user->courses()->attach($request["course_id"]);

        $success["user_name"] = $user->user_name;
        return $this->sendResponse($success, "Sikeres összekapcsolás");
    }

    public function detach(Request $request) {
        $user = User::find($request["user_id"]);
        $user->courses()->detach($request["course_id"]);

        $success["user_name"] = $user->user_name;
        return $this->sendResponse($success, "Sikeres leválasztás");
    }

}




// if(auth("sanctum")->user()->is_admin==1) {

// } else {
           
//     return $this->sendError("Sikertelen azonosítás", 401);
// };