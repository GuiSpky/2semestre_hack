<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\HistoricoResource;
use App\Models\Historico;
use Illuminate\Http\Request;

class HistoricosController extends Controller
{

    public function index()
    {
        $dados = Historico::all();
        return HistoricoResource::collection($dados);
    }

    public function store(Request $request)
    {
        $dados = $request->only(["nome","tipo","descricao","status"]);


        Historico::create($dados);
        return new Historico($dados);
    }

    public function update(Request $request, string $id)
    {
        $historico = Historico::findOrFail($id);

        $historico->update([
            "nome"=>$request->nome,
	        "descricao"=>$request->descricao,
	        "tipo"=>$request->tipo,
	        "status"=>$request->status
        ]);

        $historico = Historico::findOrFail($id);

        return new Historico($historico);
    }

    public function destroy(string $id)
    {
        $historico = Historico::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui o historico
        $historico->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Historico deletado com sucesso.',
        ], 200);
    }
}
