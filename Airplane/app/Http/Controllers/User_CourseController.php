<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User_Course;

class User_CourseController extends Controller
{
    public function getUsers_Courses() {
        $user_courses = User_Course::all();

        return $user_courses;
    }
}
