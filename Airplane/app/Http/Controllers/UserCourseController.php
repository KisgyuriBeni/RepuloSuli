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
}
