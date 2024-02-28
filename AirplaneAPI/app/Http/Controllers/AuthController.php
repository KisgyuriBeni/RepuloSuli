<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ResponseController;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\UserRegisterChecker;
use App\Http\Requests\UserLoginChecker;
use App\Http\Requests\PasswordChecker;
use Carbon\Carbon;

class AuthController extends ResponseController {
    public function register(UserRegisterChecker $request) {

        $request->validated();
        $input = $request->all();
        $input["password"] = bcrypt($input["password"]);
        $user = User::create($input);
        $success ["user_name"] =$user->user_name;

        return $this->sendResponse($success, "Sikeres regisztráció");
    }

    public function login(UserLoginChecker $request) {
        $request->validated();
        if( Auth::attempt(["email" => $request->email, "password" =>$request->password])){
           
            $bannedTime=(new BanController)->getBannedTime($request->email);
            if($bannedTime > Carbon::now()->addHours() ) {

                return $this->sendError("Túl sok próbálkozás", ["Következő bejelentkezés:", $bannedTime ], 401);
            }
            $user = Auth::user();
            (new BanController)->resetBannedData($user->email);
            $success["token"]=$user->createToken($user->user_name."token")->plainTextToken;
            $success["user_name"] = $user->user_name;
            return $this->sendResponse($success, "Sikeres bejelentkezés");
            
        }else{
            $loginAttempts=(new BanController)->getLoginAttempts($request->email);
            $bannedTime=(new BanController)->getBannedTime($request->email);
            if($loginAttempts<3) {

                $incrementAttempts=(new BanController)->setLoginAttempts($request->email);
                return $this->sendError("Adatbeviteli hiba", ["Hibás email vagy jelszó"], 401);

            } else if(is_null($bannedTime)) {
                
                (new BanController)-> setBannedTime($request->email);
                $bannedTime=(new BanController)->getBannedTime($request->email);
                //(new AlertController)->sendEmail($request->email, $bannedTime);
                return $this->sendError("Sikertelen azonosítás", ["Túl sok próbálkozás"], 401);
            }
            

        };
    }

    public function logout(Request $request) {

        auth("sanctum")->user()->currentAccessToken()->delete();

    
        return $this->sendResponse([], "Sikeres kijelentkezés");
    }

    public function modifyPassword(PasswordChecker $request) {

        $request->validated();
        $user = Auth::user();
        $user -> password = bcrypt($request["password"]);
        
        $user -> save();

        $success ["user_name"] =$user->user_name;
        return $this->sendResponse($success, "Sikeres jelszó változtatás");
        
    }

    
}
