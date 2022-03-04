<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rules\PhoneNumber;

class CommentFormController extends Controller
{
    public function submit(Request $request) {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|not_regex:/@gmail.com$/',
            'telephone' => ['required', new PhoneNumber],
            'comment' => 'required',
        ],
        [
            'name.required' => 'Укажите ФИО',
            'email.required' => 'Укажите email',
            'email.email' => 'Неверный формат email',
            'email.not_regex' => 'Почтовые адреса на gmail.com не обслуживаются',
            'comment.required' => 'Оставьте комментарий',
            'telephone.required' => 'Укажите контактный номер телефона'
        ]);

        /*
          Add mail functionality here.
        */

        return response()->json(null, 200);
    }
}