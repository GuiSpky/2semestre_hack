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
        $dados = Ambientes::create($request);
        return new AmbienteResouce($dados);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $ambiente = AmbienteResouce::find($id);
        $dados = $request;

        $ambiente-> update([$dados]);

        return new AmbienteResouce($dados);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
