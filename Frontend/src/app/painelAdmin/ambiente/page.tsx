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
  UpdateButton // Adicionamos o botão de atualização
} from './style'; // Corrigindo o caminho para importar do 'style.ts'

const Admin = () => {
  const [ambientName, setAmbientName] = useState<string>(''); // Nome do novo ambiente ou ambiente a ser alterado
  const [ambientList, setAmbientList] = useState<string[]>([]); // Lista de ambientes
  const [selectedAmbient, setSelectedAmbient] = useState<string | null>(null); // Ambiente selecionado para edição

  // Função para criar novo ambiente
  const handleCreateAmbient = () => {
    if (ambientName) {
      setAmbientList([...ambientList, ambientName]);
      setAmbientName('');
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
        </CreateAmbient>
        
        {/* Lista de ambientes criados */}
        <AmbientList>
          <h3>Ambientes Criados:</h3>
          <ul>
            {ambientList.length > 0 ? (
              ambientList.map((ambient, index) => (
                <li key={index} onClick={() => handleSelectAmbient(ambient)}>
                  {ambient}
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
