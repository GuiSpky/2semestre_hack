'use client';

import React, { useState } from 'react';
import {
  ReservaContainer,
  ReservaTitle,
  ReservaSection,
  SectionTitle,
  AmbienteSelect,
  DateTimeInput,
  CreateReservaButton,
  AmbienteDetails,
  AmbienteInfo,
  ErrorMessage
} from './style'; // Estilos personalizados para a página de reserva
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

const ambientes = [
  {
    id: 1,
    nome: 'Sala de Reuniões A',
    capacidade: 10,
    equipamentos: 'Projetor, Tela de Projeção, Som',
    horarioFuncionamento: '09:00 - 18:00',
    localizacao: 'Andar 1, Bloco A',
  },
  {
    id: 2,
    nome: 'Auditório B',
    capacidade: 50,
    equipamentos: 'Microfone, Projetor, Sistema de Som',
    horarioFuncionamento: '08:00 - 20:00',
    localizacao: 'Andar 2, Bloco B',
  }
];

const Reserva = () => {
  const [ambienteId, setAmbienteId] = useState<number>(0);
  const [data, setData] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleReserva = async () => {
    if (!data || !horario) {
      setErrorMessage('Por favor, selecione uma data e horário.');
      return;
    }


    // Realiza a reserva chamando a API
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reservas', {  // A URL da sua API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_usuario: 1,  // Substitua com o ID real do usuário, se necessário
          id_ambiente: ambienteId,
          horario_inicio: data + ' ' + horario,  // Data e horário no formato correto
          horario_fim: data + ' ' + horario,  // Ajuste a lógica se necessário
          status: 'pendente',  // Status padrão (ajuste conforme necessário)
        })
      });

      if (!response.ok) {
        throw new Error('Falha ao realizar a reserva');
      }

      setErrorMessage('');
      alert('Reserva realizada com sucesso!');
    
    } catch (error) {
      console.error('Erro ao realizar a reserva:', error);
      setErrorMessage('Erro ao realizar a reserva.');
    }
  };


  const ambienteSelecionado = ambientes.find((ambiente) => ambiente.id === ambienteId);

  return (
    <>
      <Menu />
      <ReservaContainer>
        <ReservaTitle>Faça sua Reserva</ReservaTitle>

        <ReservaSection>
          <SectionTitle>Selecione o Ambiente</SectionTitle>
          <AmbienteSelect onChange={(e) => setAmbienteId(Number(e.target.value))}>
            <option value={0}>Selecione um ambiente</option>
            {ambientes.map((ambiente) => (
              <option key={ambiente.id} value={ambiente.id}>
                {ambiente.nome}
              </option>
            ))}
          </AmbienteSelect>

          {ambienteSelecionado && (
            <AmbienteDetails>
              <h3>Detalhes do Ambiente</h3>
              <AmbienteInfo><strong>Capacidade:</strong> {ambienteSelecionado.capacidade} pessoas</AmbienteInfo>
              <AmbienteInfo><strong>Equipamentos:</strong> {ambienteSelecionado.equipamentos}</AmbienteInfo>
              <AmbienteInfo><strong>Horário de Funcionamento:</strong> {ambienteSelecionado.horarioFuncionamento}</AmbienteInfo>
              <AmbienteInfo><strong>Localização:</strong> {ambienteSelecionado.localizacao}</AmbienteInfo>
            </AmbienteDetails>
          )}

          <SectionTitle>Selecione a Data e Horário</SectionTitle>
          <DateTimeInput
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <DateTimeInput
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <CreateReservaButton onClick={handleReserva}>Reservar Ambiente</CreateReservaButton>
        </ReservaSection>
      </ReservaContainer>
    </>
  );
};

export default Reserva;
