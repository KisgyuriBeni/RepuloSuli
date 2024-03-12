<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airplane;
use App\Http\Controllers\Api\ResponseController;

class AirplaneController extends Controller {
    
    public function getAirplanes() {
        $airplanes = Airplane::all();

        return $airplanes;
    }

    public function getAirplaneById($id) {
        $airplane = Airplane::where("id", $id)->first();

        return $airplane;
        
    }

    public function deleteAirplane(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

            $airplane = Airplane::find($request["id"]);

            $airplane->delete();
            return $airplane;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };
        
    }

    public function updateAirplane(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

            $airplane = Airplane::find($request["id"]);
            $airplane -> airplane_name = $request["airplane_name"];
            $airplane -> propulsion = $request["propulsion"];

            $airplane -> save();
            return $airplane;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };
    }

    public function createAirplane(Request $request) {

        if(auth("sanctum")->user()->is_admin==1) {

            $airplane = new Airplane;
            $airplane -> airplane_name = $request["airplane_name"];
            $airplane -> propulsion = $request["propulsion"];

            $airplane -> save();
            return $airplane;

        } else {
                   
            return $this->sendError("Sikertelen azonosítás", 401);
        };
    }
}
