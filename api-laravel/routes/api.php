<?php

use App\Http\Controllers\api\AmbienteController;
use App\Http\Controllers\api\HistoricosController;
use App\Http\Controllers\api\NotificacoesController;
use App\Http\Controllers\api\ReservasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('ambientes', AmbienteController::class);
Route::delete('/ambientes/deletar/{id}', [AmbienteController::class, 'destroy']);

Route::apiResource('historicos', HistoricosController::class);
Route::apiResource('notificacoes', NotificacoesController::class);
Route::apiResource('reservas', ReservasController::class);
