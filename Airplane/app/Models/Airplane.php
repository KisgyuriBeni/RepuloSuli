<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airplane extends Model
{
    use HasFactory;
    protected $fillable = [
        "airplane_name",
        "propuslion"
    ];
    public $timestamps = false;
}
