<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\HistoricoResource;
use App\Models\Historico;
use Illuminate\Http\Request;

class HistoricosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dados = Historico::all();
        return HistoricoResource::collection($dados);
    }

    public function store(Request $request)
    {
        $dados = $request->only(["nome","tipo","descricao","status"]);
        // dd($dados);

        Historico::create($dados);
        return new Historico($dados);
    }

    public function update(Request $request, string $id)
    {
        $ambiente = Historico::findOrFail($id);

        $ambiente->update([
            "nome"=>$request->nome,
	        "descricao"=>$request->descricao,
	        "tipo"=>$request->tipo,
	        "status"=>$request->status
        ]);

        $ambiente = Historico::findOrFail($id);

        return new Historico($ambiente);
    }

    public function destroy(string $id)
    {
        $ambiente = Historico::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui o ambiente
        $ambiente->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Ambiente deletado com sucesso.',
        ], 200);
    }
}
