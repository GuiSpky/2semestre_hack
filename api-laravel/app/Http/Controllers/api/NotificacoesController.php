<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificacaoResource;
use App\Models\Notificacoes;
use Illuminate\Http\Request;

class NotificacoesController extends Controller
{
    public function index()
    {
        $dados = Notificacoes::all();
        return NotificacaoResource::collection($dados);
    }

    public function store(Request $request)
    {
        $dados = $request->only(["id_usuario","mensagem","tipo"]);


        Notificacoes::create($dados);
        return new Notificacoes($dados);
    }

    public function update(Request $request, string $id)
    {
        $Notificacoes = Notificacoes::findOrFail($id);

        $Notificacoes->update([
            "id_usuario"=>$request->id_usuario,
	        "mensagem"=>$request->mensagem,
	        "tipo"=>$request->tipo,
        ]);

        $Notificacoes = Notificacoes::findOrFail($id);

        return new Notificacoes($Notificacoes);
    }

    public function destroy(string $id)
    {
        $Notificacoes = Notificacoes::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui o Notificacoes
        $Notificacoes->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Notificações deletado com sucesso.',
        ], 200);
    }
}


