<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservasResource extends JsonResource
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
            'id_usuario'=> $this->id_usuario,
            'id_ambiente'=> $this->id_ambiente,
            'horario_inicio'=> $this->horario_inicio,
            'horario_fim'=> $this->horario_fim,
            'status'=> $this->status,
        ];
    }
}
