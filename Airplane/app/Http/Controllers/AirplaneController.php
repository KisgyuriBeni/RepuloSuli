<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airplane;

class AirplaneController extends Controller
{
    public function getAirplanes() {
        $airplanes = Airplane::all();

        return $airplanes;
    }
}
