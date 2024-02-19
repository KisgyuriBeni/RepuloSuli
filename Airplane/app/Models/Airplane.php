<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airplane extends Model
{
    use HasFactory;
    protected $fillable = [
        "airplane_name",
        "propulsion"
    ];

    public $timestamps = false;
    
    public function course() {

        return $this->hasMany(Course::class);
    }
}
