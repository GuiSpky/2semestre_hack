// app/reserva/page.tsx
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

const reservasExistentes = [
  { ambienteId: 1, data: '2024-11-22', horario: '10:00' },
  { ambienteId: 2, data: '2024-11-23', horario: '14:00' },
];

const Reserva = () => {
  const [ambienteId, setAmbienteId] = useState<number>(0);
  const [data, setData] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleReserva = () => {
    if (!data || !horario) {
      setErrorMessage('Por favor, selecione uma data e horário.');
      return;
    }

    // Verifica se já existe uma reserva para o ambiente, data e horário
    const reservaDuplicada = reservasExistentes.some(
      (reserva) => reserva.ambienteId === ambienteId && reserva.data === data && reserva.horario === horario
    );

    if (reservaDuplicada) {
      setErrorMessage('Este horário já está reservado para o ambiente escolhido.');
      return;
    }

    // Se não for duplicada, realiza a reserva
    reservasExistentes.push({ ambienteId, data, horario });
    setErrorMessage('');
    alert('Reserva realizada com sucesso!');
  };

  const ambienteSelecionado = ambientes.find((ambiente) => ambiente.id === ambienteId);

  return (
    <>
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
