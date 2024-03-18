<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model {
    use HasFactory;

    protected $fillable=[
        "airplane_id",
        "instructor",
        "duration",
        "course_fee"
    ];

    public $timestamps = false;

    public function users(): BelongsToMany {

        return $this->belongsToMany(User::class, 'user_course', 'course_id', 'user_id');
    }

    public function airplane(){

        return $this->belongsTo(Airplane::class);
    }
}
