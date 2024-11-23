<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AmbienteResouce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'nome'=> $this->nome,
            'foto' => $this->foto,
            'tipo'=> $this->tipo,
            'descricao'=> $this->descricao,
            'status'=> $this->status
        ];
    }
}
