// app/reserva/style.ts
import styled from 'styled-components';

export const ReservaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReservaTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const ReservaSection = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #4caf50;
`;

export const AmbienteSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%;
`;

export const DateTimeInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;
`;

export const CreateReservaButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const AmbienteDetails = styled.div`
  margin-top: 20px;
`;

export const AmbienteInfo = styled.p`
  font-size: 1.1rem;
  margin: 5px 0;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: 10px;
`;
