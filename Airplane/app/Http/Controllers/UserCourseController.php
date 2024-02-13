<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserCourse;

class UserCourseController extends Controller
{
    public function getUsersCourses() {
        $usersCourses = UserCourse::all();

        return $usersCourses;
    }

    public function getByUserId($userId) {
        $usersCourses = UserCourse::where("user_id", $userId) ->first();

        return $usersCourses;
    }

    public function getByCourseId($courseId) {
        $usersCourses = UserCourse::where("course_id", $courseId) ->first();

        return $usersCourses;
    }

    public function deleteByUserId(Request $request) {
        $usersCourses = UserCourse::where("user_id", $request["user_id"]);

        $usersCourses->delete();
        return "Sikeres törlés";
        

    }

    public function deleteByCourseId(Request $request) {
        $usersCourses = UserCourse::where("course_id", $request["course_id"]);

        $usersCourses->delete();
        return "Sikeres törlés";
        

    }


    public function createNewUserCourses(Request $request) {

        $usersCourses = new UserCourse;
        $usersCourses -> user_id = $request["user_id"];
        $usersCourses -> course_id = $request["course_id"];
        

        $usersCourses -> save();
        return $usersCourses;
        
    }
    
}
