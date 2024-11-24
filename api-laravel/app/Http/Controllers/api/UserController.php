<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $dados = User::all();
        return ($dados);
    }

    public function store(Request $request)
    {
        $dados = $request->only(["name","email","cargo","password"]);


        User::create($dados);
        return new User($dados);
    }

    public function show(string $id)
    {
        $user = User::findOrFail($id); // Encontra o recurso ou lança um erro 404

        return ($user);
    }

    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            "name"=>$request->name,
	        "email"=>$request->email,
	        "password"=>$request->password,
	        "cargo"=>$request->cargo,
        ]);


        return ($user);
    }

    public function destroy(string $id)
    {
        $user = User::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui a reserva
        $user->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Usuario deletado com sucesso.',
        ], 200);
    }
}
