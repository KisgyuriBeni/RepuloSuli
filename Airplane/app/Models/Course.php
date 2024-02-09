<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable=[
        "course_name",
        "user_id",
        "airplane_id",
        "instructor",
        "start_date",
        "end_date",
        "start_day",
        "course_fee"
    ];
    public $timestamps = false;
}
