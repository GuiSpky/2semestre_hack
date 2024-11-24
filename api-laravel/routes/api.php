<?php

use App\Http\Controllers\api\AmbienteController;
use App\Http\Controllers\api\HistoricosController;
use App\Http\Controllers\api\NotificacoesController;
use App\Http\Controllers\api\ReservasController;
use App\Http\Controllers\api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

Route::apiResource('/users', UserController::class);
Route::apiResource('/users/deletar/{id}', [UserController::class, 'destroy']);

Route::apiResource('ambientes', AmbienteController::class);
Route::delete('/ambientes/deletar/{id}', [AmbienteController::class, 'destroy']);
Route::put('/ambientes/{id}', [AmbienteController::class, 'update']);
Route::put('/ambientes/show/{id}', [AmbienteController::class, 'show']);

Route::apiResource('historicos', HistoricosController::class);
Route::put('/historicos/{id}', [HistoricosController::class, 'update']);
Route::delete('/historicos/deletar/{id}', [HistoricosController::class, 'destroy']);
Route::put('/historicos/show/{id}', [HistoricosController::class, 'show']);

Route::apiResource('notificacoes', NotificacoesController::class);
Route::put('/notificacoes/{id}', [NotificacoesController::class, 'update']);
Route::delete('/notificacoes/deletar/{id}', [NotificacoesController::class, 'destroy']);

Route::apiResource('reservas', ReservasController::class);
Route::put('/reservas/{id}', [ReservasController::class, 'update']);
Route::delete('/reservas/deletar/{id}', [ReservasController::class, 'destroy']);
Route::put('/reservas/show/{id}', [ReservasController::class, 'show']);
