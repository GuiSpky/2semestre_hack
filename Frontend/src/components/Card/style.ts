

'use client';
import styled from 'styled-components'

export const CardBody = styled.div`
  max-width: 18rem;
  margin: 18px;
  border: 1px solid #d2d2d2;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.h3``

export const Button = styled.button`
  border: 0;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--red);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 10px;
`
export const TextButton = styled.h3`
  color: var(--white);
`
export const TitleTipo = styled.h3`
  font-size: 1rem;
  color: #0000ff;
  margin-top: 5px;
  text-transform: capitalize; /* Ajusta o texto para capitalizar a primeira letra */
`;

export const TextStatus = styled.p<{ status: string }>` /* Tipo explícito da prop */
  font-size: 0.9rem;
  color: ${({ status }) => {
    switch (status.toLowerCase()) { /* Verifica o status ignorando o case */
      case "disponível":
        return "#4caf50"; /* Verde */
      case "reservado":
        return "#ff9800"; /* Laranja */
      case "em manutenção":
        return "#f44336"; /* Vermelho */
      default:
        return "#000"; /* Cor padrão (preto) */
    }
  }};
  margin: 5px 0;
  font-weight: bold;
  text-transform: capitalize; /* Capitaliza a primeira letra do status */
`;