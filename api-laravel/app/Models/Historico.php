<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Historico extends Model
{
    protected $fillable = ['reserva_id','alteracoes','modificado_em'];
}
