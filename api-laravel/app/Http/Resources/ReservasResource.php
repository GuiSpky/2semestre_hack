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
            'reserva_id'=>$this->reserva_id,
            'id_ambiente'=> $this->id_ambiente,
            'horario_inicio'=> $this->horario_inicio,
            'horario_fim'=> $this->horario_fim,
            'status'=> $this->status,
        ];
    }
}
