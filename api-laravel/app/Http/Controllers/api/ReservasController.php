<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReservasRequest;
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

    public function store(ReservasRequest $request)
    {
        // Os dados já foram validados, agora podemos criar a reserva
        Reservas::create([
            "id_usuario" => $request->id_usuario,
            "id_ambiente" => $request->id_ambiente,
            "horario_inicio" => $request->hora_inicio,
            "horario_fim" => $request->hora_fim,
            "status" => $request->status
        ]);

        return response()->json([
            'message' => 'Reserva criada com sucesso!'
        ], 201);  // Resposta de sucesso
    }


    public function show(string $id)
    {
        $reservas = Reservas::findOrFail($id); // Encontra o recurso ou lança um erro 404

        return ($reservas);
    }

    public function update(Request $request, string $id)
    {
        $reserva = Reservas::findOrFail($id);

        $reserva->update([
            "id_usuario" => $request->id_usuario,
            "id_ambiente" => $request->id_ambiente,
            "horario_inicio" => $request->horario_inicio,
            "horario_fim" => $request->horario_fim,
            "status" => $request->status
        ]);


        return ($reserva);
    }

    public function destroy(string $id)
    {
        $reserva = Reservas::findOrFail($id); // Encontra o recurso ou lança um erro 404

        // Exclui a reserva
        $reserva->delete();

        // Retorna apenas uma mensagem de sucesso
        return response()->json([
            'message' => 'Reserva deletado com sucesso.',
        ], 200);
    }
}
