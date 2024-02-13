<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_name",
        "email",
        "phone_number",
        "password",
        "first_name",
        "last_name",
        "mothers_name",
        "address",
        "birth_day"
    ];
    public $timestamps = false;

    public function courses(): BelongsToMany {

        return $this->belongsToMany(Course::class, 'user_course', 'user_id', 'course_id');
    }
}
