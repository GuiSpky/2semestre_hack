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
        $dados = $request->only(["reserva_id","alteracoes","modificado_em"]);


        Historico::create($dados);
        return new Historico($dados);
    }

    public function update(Request $request, string $id)
    {
        $historico = Historico::findOrFail($id);

        $historico->update([
            "reserva_id"=>$request->reserva_id,
	        "alteracoes"=>$request->alteracoes,
	        "modificado_em"=>$request->modificado_em,
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
