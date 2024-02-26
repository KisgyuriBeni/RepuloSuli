<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterChecker extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name"=>"required|max:20|unique:users",
            "email"=>"required|email|unique:users",
            "password"=>"required|min:6",
            "confirm_password"=>"required|same:password",
            "phone_number"=>"required|max:15",
            "first_name"=>"required|max:50",
            "last_name"=>"required|max:50",
            "mothers_name"=>"required|max:100",
            "address"=>"required|max:100",
            "birth_day"=>"required"
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            "success"=>false,
            "message"=>"Adatbeviteli hiba",
            "data"=>$validator->errors()
        ]));
    }
}
