<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Airplane extends Model {
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
