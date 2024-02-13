<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    
}
