<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AmbienteResouce;
use App\Models\Ambientes;
use Illuminate\Http\Request;

class AmbienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dados = Ambientes::all();
        return AmbienteResouce::collection($dados);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->only(["nome","tipo","descricao","status"]);
        // dd($dados);

        Ambientes::create($dados);
        return new AmbienteResouce($dados);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $ambiente = Ambientes::findOrFail($id);

        $ambiente->update([
            "nome"=>$request->nome,
	        "descricao"=>$request->descricao,
	        "tipo"=>$request->tipo,
	        "status"=>$request->status
        ]);

        $ambiente = Ambientes::findOrFail($id);

        return new AmbienteResouce($ambiente);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ambiente = Ambientes::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui o ambiente
        $ambiente->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Ambiente deletado com sucesso.',
        ], 200);
    }
}
