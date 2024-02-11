<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUsers() {
        $users = User::all();

        return $users;
    }

    public function getUserById($userId) {
        $user = User::where("id", $userId) ->first();

        return $user;
    }

    public function deleteUser(Request $request) {
        $user = User::find($request["id"]);

        $user->delete();
        return $user;

    }

    public function updateUser(Request $request) {

        $user = User::find($request["id"]);
        $user -> course_id = $request["course_id"];
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

