<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservas extends Model
{
    protected $fillable = [
        'id_usuario',
        'reserva_id',
        'id_ambiente',
        'horario_inicio',
        'horario_fim',
        'status',
    ];
}
