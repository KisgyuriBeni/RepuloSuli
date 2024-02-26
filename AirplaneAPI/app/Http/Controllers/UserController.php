<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRegisterChecker;



class UserController extends Controller {
    
    public function getUsers() {
        $users = User::with("courses")->get();

        return $users;
        
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

}
