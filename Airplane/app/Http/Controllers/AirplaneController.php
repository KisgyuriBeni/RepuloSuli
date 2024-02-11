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

    public function getAirplaneById($airplaneId) {
        $airplane = Airplane::where("id", $airplaneId) ->first();

        return $airplane;
    }

    public function deleteAirplane(Request $request) {
        $airplane = Airplane::find($request["id"]);

        $airplane->delete();
        return $airplane;

    }

    public function updateAirplane(Request $request) {

        $airplane = Airplane::find($request["id"]);
        $airplane -> airplane_name = $request["airplane_name"];
        $airplane -> propulsion = $request["propulsion"];

        $airplane -> save();
        return $airplane;
    }
}
