<?php

namespace App\Http\Controllers;
use App\Models\Course;

use Illuminate\Http\Request;

class CourseController extends Controller {
    public function getCourses() {
        $courses = Course::with("airplane")->get();

        return $courses;
    }

    public function getCourseById($id) {
        $course = Course::where("id", $id)->first();
        

        return $course->with("airplane")->get();
    }

    public function deleteCourse(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

            $course = Course::find($request["id"]);

            $course->delete();
            return $course;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };
        
    }

    public function updateCourse(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

            $course = Course::find($request["id"]);
            $course -> course_name = $request["course_name"]; 
            $course -> airplane_id = $request["airplane_id"];  
            $course -> instructor = $request["instructor"];  
            $course -> start_date = $request["start_date"];  
            $course -> end_date = $request["end_date"]; 
            $course -> course_fee = $request["course_fee"];  

            $course -> save();
            return $course;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };

        
    }

    public function createCourse(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

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

    } else {
                   
        return $this->sendError("Sikertelen azonosítás", 401);
    };
    }
}
