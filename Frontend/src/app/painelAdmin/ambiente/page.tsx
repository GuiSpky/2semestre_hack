'use client';

import React, { useState } from 'react';
import {
  AdminContainer,
  AdminTitle,
  AdminSection,
  SectionTitle,
  CreateAmbient,
  AmbientInput,
  CreateButton,
  AmbientList,
  ReportsInfo,
  ReportsButton,
  UpdateButton, // Adicionamos o botão de atualização
  ErrorMessage, // Estilo para a mensagem de erro
  DeleteButton // Estilo para o botão de excluir
} from './style'; // Corrigindo o caminho para importar do 'style.ts'

const Admin = () => {
  const [ambientName, setAmbientName] = useState<string>(''); // Nome do novo ambiente ou ambiente a ser alterado
  const [ambientList, setAmbientList] = useState<string[]>([]); // Lista de ambientes
  const [selectedAmbient, setSelectedAmbient] = useState<string | null>(null); // Ambiente selecionado para edição
  const [error, setError] = useState<string | null>(null); // Mensagem de erro para duplicação

  // Função para criar novo ambiente
  const handleCreateAmbient = () => {
    // Verifica se o nome do ambiente já existe na lista
    if (ambientList.includes(ambientName)) {
      setError('Já existe um ambiente com esse nome.');
      return;
    }

    if (ambientName) {
      setAmbientList([...ambientList, ambientName]);
      setAmbientName('');
      setError(null); // Limpa a mensagem de erro, caso haja
    }
  };

  // Função para selecionar um ambiente para edição
  const handleSelectAmbient = (ambient: string) => {
    setSelectedAmbient(ambient);
    setAmbientName(ambient); // Preenche o campo de edição com o nome do ambiente
  };

  // Função para salvar a alteração do nome do ambiente
  const handleUpdateAmbient = () => {
    if (selectedAmbient && ambientName) {
      setAmbientList(
        ambientList.map((ambient) =>
          ambient === selectedAmbient ? ambientName : ambient
        )
      );
      setSelectedAmbient(null); // Limpa o ambiente selecionado
      setAmbientName(''); // Limpa o campo de entrada
      setError(null); // Limpa qualquer mensagem de erro
    }
  };

  // Função para excluir um ambiente
  const handleDeleteAmbient = (ambient: string) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o ambiente "${ambient}"?`);
    if (confirmDelete) {
      setAmbientList(ambientList.filter((item) => item !== ambient));
    }
  };

  return (
    <AdminContainer>
      <AdminTitle>Cadastro de Ambientes</AdminTitle>
      
      <AdminSection>
        <SectionTitle>Gerenciamento de Ambientes</SectionTitle>
        
        {/* Selecione um ambiente para edição */}
        <CreateAmbient>
          <AmbientInput
            type="text"
            value={ambientName}
            onChange={(e) => setAmbientName(e.target.value)}
            placeholder="Nome do novo ambiente"
          />
          <CreateButton onClick={handleCreateAmbient}>Criar Novo Ambiente</CreateButton>
          
          {/* Exibe a mensagem de erro se o nome do ambiente for duplicado */}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </CreateAmbient>
        
        {/* Lista de ambientes criados */}
        <AmbientList>
          <h3>Ambientes Criados:</h3>
          <ul>
            {ambientList.length > 0 ? (
              ambientList.map((ambient, index) => (
                <li key={index} onClick={() => handleSelectAmbient(ambient)}>
                  {ambient}
                  {/* Adicionando o botão de excluir ao lado do ambiente */}
                  <DeleteButton onClick={() => handleDeleteAmbient(ambient)}>Excluir</DeleteButton>
                </li>
              ))
            ) : (
              <p>Nenhum ambiente criado ainda.</p>
            )}
          </ul>
        </AmbientList>
        
        {/* Se um ambiente estiver selecionado para edição, mostramos um campo de entrada para alteração */}
        {selectedAmbient && (
          <div>
            <h3>Alterar Ambiente Selecionado</h3>
            <AmbientInput
              type="text"
              value={ambientName}
              onChange={(e) => setAmbientName(e.target.value)}
              placeholder="Novo nome do ambiente"
            />
            <UpdateButton onClick={handleUpdateAmbient}>Alterar Ambiente</UpdateButton>
          </div>
        )}
      </AdminSection>

      <AdminSection>
        <SectionTitle>Relatórios de Uso</SectionTitle>
        <ReportsInfo>
          Aqui você pode visualizar relatórios de uso e gerar gráficos com base no uso dos ambientes.
        </ReportsInfo>
        <ReportsButton>Visualizar Relatórios</ReportsButton>
      </AdminSection>
    </AdminContainer>
  );
};

export default Admin;
