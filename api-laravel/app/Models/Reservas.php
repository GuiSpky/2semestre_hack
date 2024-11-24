<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservas extends Model
{
    use HasFactory;

    // Adiciona os campos que podem ser preenchidos diretamente
    protected $fillable = [
        'id_usuario',
        'id_ambiente',
        'horario_inicio',
        'horario_fim',
        'status',
    ];
}
