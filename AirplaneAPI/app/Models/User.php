<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Notifications\ResetPasswordNotification;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    
    protected $hidden = [
        'password',
        'remember_token'
        
    ];

    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function courses(): BelongsToMany {

        return $this->belongsToMany(Course::class, 'user_course', 'user_id', 'course_id');
    }

    public function sendPasswordResetNotification($token)
    {

        $url = 'frontend url reset-password?token=' . $token;

        $this->notify(new ResetPasswordNotification($url));
    }
}
