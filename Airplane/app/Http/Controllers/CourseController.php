<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function getCourses() {
        $courses = Course::with("airplane")->get();

        return $courses;
    }

    public function getCourseById(Request $request) {
        $course = Course::find($request["id"]);

        return $course;
        //TODO:hozzátartozó repülőgép kiírása
    }

    public function deleteCourse(Request $request) {
        $course = Course::find($request["id"]);

        $course->delete();
        return $course;

    }

    public function updateCourse(Request $request) {

        $course = Course::find($request["id"]);
        $course -> course_name = $request["course_name"]; 
        $course -> airplane_id = $request["airplane_id"];  
        $course -> instructor = $request["instructor"];  
        $course -> start_date = $request["start_date"];  
        $course -> end_date = $request["end_date"]; 
        $course -> course_fee = $request["course_fee"];  



        $course -> save();
        return $course;
    }

    public function createCourse(Request $request) {

        $course = new Course;
        $course -> id = $request["id"];
        $course -> course_name = $request["course_name"];
        $course -> airplane_id = $request["airplane_id"];  
        $course -> instructor = $request["instructor"];  
        $course -> start_date = $request["start_date"];  
        $course -> end_date = $request["end_date"];
        $course -> course_fee = $request["course_fee"];  
        

        $course -> save();
        return $course;
    }
}
