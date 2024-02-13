<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    use HasFactory;
    protected $fillable=[
        "user_id",
        "airplane_id",
        "instructor",
        "start_date",
        "end_date",
        "course_fee"
    ];
    public $timestamps = false;

    public function users(): BelongsToMany {

        return $this->belongsToMany(User::class, 'user_course', 'course_id', 'user_id');
    }
}
