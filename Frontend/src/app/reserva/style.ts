import styled from "styled-components";

// Container principal da página
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Título principal
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

// Mensagem de erro
export const ErrorMessage = styled.p`
  color: #f44336; /* Vermelho */
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
`;

// Container da lista de ambientes
export const AmbientListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
`;

// Cartão individual de ambiente
export const AmbientCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Nome do ambiente
export const AmbientName = styled.h2`
  font-size: 1.5rem;
  color: #4caf50; /* Verde */
  margin-bottom: 10px;
`;

// Detalhes do ambiente
export const AmbientDetail = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

// Container do formulário
export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

// Formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Campo de entrada
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0px 0px 5px rgba(76, 175, 80, 0.5);
  }
`;

// Campo de seleção
export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0px 0px 5px rgba(76, 175, 80, 0.5);
  }
`;

// Botão de envio
export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50; /* Verde */
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

// Menu administrativo (exemplo genérico)
export const MenuAdmin = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
