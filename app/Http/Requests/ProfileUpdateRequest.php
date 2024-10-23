<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
           'name' => 'required|string|max:255',
           'email' => 'required|email|max:255|unique:users,email,' . $this->user()->id,
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}