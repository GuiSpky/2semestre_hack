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
        Schema::create('ambientes', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->unique(); // Nome único do espaço
            $table->string('tipo'); // Tipo, sala de aula, lab, auditório...
            $table->text('descricao')->nullable(); // Descrição do espaço (opcional)
            $table->string('status')->nullable(); // Disponivel, reservado, manutenção
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ambientes');
    }
};
