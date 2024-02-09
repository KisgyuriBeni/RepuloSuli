<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function getCourses() {
        $courses = Course::all();

        return $courses;
    }
}
