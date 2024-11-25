<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if(Auth::guard('web')->attempt($request->only('email','password'))){
            $user = Auth::user(); // Obter o usuário autenticado
            // $token = $user->createToken('API Token')->plainTextToken; // Gerar o token Sanctum

            return response()->json([
                'message' => 'Login successful',
                'token' => $request->user()->createToken('invoice')->plainTextToken,
                'user' => $user,
            ]);
        };
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}

