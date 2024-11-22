<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoricoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'reserva_id'=> $this->reserva_id,
            'alteracoes'=> $this->alteracoes,
            'modificado_em'=> $this->modificado_em,
        ];
    }
}
