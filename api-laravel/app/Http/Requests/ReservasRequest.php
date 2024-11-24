<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Valida se hora_inicio está no formato correto e dentro do intervalo permitido
            'hora_inicio' => [
                'required',
                'date_format:H:i', // Verifica se o campo está no formato de hora adequado
                function ($attribute, $value, $fail) {
                    $hora_minima = '08:00';
                    $hora_maxima = '21:00';

                    if ($value < $hora_minima || $value > $hora_maxima) {
                        $fail('A hora de início deve estar entre 08:00 e 21:00.');
                    }
                },
            ],

            // Valida se hora_fim está no formato correto e dentro do intervalo permitido
            'hora_fim' => [
                'required',
                'date_format:H:i', // Verifica se o campo está no formato de hora adequado
                function ($attribute, $value, $fail) {
                    $hora_minima = '09:00';
                    $hora_maxima = '22:00';

                    if ($value < $hora_minima || $value > $hora_maxima) {
                        $fail('A hora de fim deve estar entre 09:00 e 22:00.');
                    }
                },
                'after:hora_inicio', // Garante que a hora de fim seja depois de hora_inicio
            ],
        ];
    }
}
