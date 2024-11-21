<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('historico_reservas', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('reserva_id')->unsigned();
            $table->foreign('reserva_id')->references('id')->on('reservas');
            $table->string('alteracoes');
            $table->datetime('modificado_em');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historico_reservas');
    }
};
