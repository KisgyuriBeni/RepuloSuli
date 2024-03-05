<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserCourseChecker extends FormRequest
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
            "user_name"=>"required|nullable",
            "email"=>"required|nullable",
            "password"=>"required|nullable",
            "confirm_password"=>"required|nullable",
            "phone_number"=>"required|nullable",
            "first_name"=>"required|nullable",
            "last_name"=>"required|nullable",
            "mothers_name"=>"required|nullable",
            "address"=>"required|nullable",
            "birth_day"=>"required|nullable"
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
