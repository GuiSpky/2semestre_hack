<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReservasResource;
use App\Models\Reservas;
use Illuminate\Http\Request;

class ReservasController extends Controller
{
    public function index()
    {
        $dados = Reservas::all();
        return ReservasResource::collection($dados);
    }

    public function store(Request $request)
    {
        $dados = $request->only(["nome","tipo","descricao","status"]);
        // dd($dados);

        Reservas::create($dados);
        return new Reservas($dados);
    }

    public function update(Request $request, string $id)
    {
        $ambiente = Reservas::findOrFail($id);

        $ambiente->update([
            "nome"=>$request->nome,
	        "descricao"=>$request->descricao,
	        "tipo"=>$request->tipo,
	        "status"=>$request->status
        ]);

        $ambiente = Reservas::findOrFail($id);

        return new Reservas($ambiente);
    }

    public function destroy(string $id)
    {
        $ambiente = Reservas::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui o ambiente
        $ambiente->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Ambiente deletado com sucesso.',
        ], 200);
    }
}
