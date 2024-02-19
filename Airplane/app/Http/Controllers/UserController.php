<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    


    public function getUsers() {
        $users = User::with("courses")->get();

        return $users;
        
    }

    public function getUserById(Request $request) {
        $user = User::find($request["id"]);

        return $user;
        //TODO:hozzátartozó curzus kiírása
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

    public function createUser(Request $request) {

        $user = new User;
        $user -> id = $request["id"];
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

    public function store(Request $request) {
        $user = User::find($request["user_id"]);
        $user->courses()->attach($request["course_id"]);
    }
    
}


