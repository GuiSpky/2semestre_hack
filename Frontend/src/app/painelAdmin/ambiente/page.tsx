'use client';

import React, { useState, useEffect } from 'react';
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
  UpdateButton,
  ErrorMessage,
  DeleteButton
} from './style';
import { MenuAdmin } from '@/components/MenuAdmin';



<<<<<<< HEAD
=======

>>>>>>> 5743be7bc4d6e64da728e2b4b0f35b19959d6165

const Admin = () => {
  const [ambientName, setAmbientName] = useState<string>(''); // Nome do novo ambiente ou ambiente a ser alterado
  const [ambientType, setAmbientType] = useState<string>(''); // Tipo do ambiente
  const [ambientDescription, setAmbientDescription] = useState<string>(''); // Descrição do ambiente
  const [ambientStatus, setAmbientStatus] = useState<string>(''); // Status do ambiente
  const [ambientList, setAmbientList] = useState<any[]>([]); // Lista de ambientes
  const [selectedAmbient, setSelectedAmbient] = useState<any | null>(null); // Ambiente selecionado para edição
  const [error, setError] = useState<string | null>(null); // Mensagem de erro para duplicação


  // Função para carregar a lista de ambientes da API
  const fetchAmbientes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/ambientes');
      if (!response.ok) {
        throw new Error('Erro ao buscar ambientes.');
      }
      const jsonData = await response.json();
      setAmbientList(jsonData.data); // Acesse a propriedade "data"
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setError('Não foi possível carregar a lista de ambientes.');
    }


  };

  useEffect(() => {
    // Supondo que você faça um fetch e receba os dados
    fetch('/api/ambientes')
      .then((response) => response.json())
      .then((data) => {
        setAmbientList(data);
      });
  }, []);


  // Função para criar novo ambiente
  const handleCreateAmbient = async () => {
    console.log(Array.isArray(ambientList));  // Isso deve retornar true se for um array
    console.log(ambientList);  // Verifique o conteúdo de ambientList

    // Exemplo de como você pode garantir que ambientList é um array
    if (Array.isArray(ambientList) && ambientList.some((ambiente) => ambiente.nome === ambientName)) {
      setError('Já existe um ambiente com esse nome.');
      return;
    }


    if (ambientName && ambientType && ambientDescription && ambientStatus) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/ambientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: ambientName,
            tipo: ambientType,
            descricao: ambientDescription,
            status: ambientStatus
          })
        });

        if (!response.ok) {
          // Exibe a resposta do erro
          const errorData = await response.json();
          console.error('Erro ao criar o ambiente:', errorData);
          setError('Falha ao criar o ambiente.');
        } else {
          const newAmbient = await response.json(); // Espera a resposta para pegar o novo ambiente
          setAmbientList([...ambientList, newAmbient]); // Adiciona o ambiente à lista
          setAmbientName('');
          setAmbientType('');
          setAmbientDescription('');
          setAmbientStatus('');
          setError(null); // Limpa a mensagem de erro
        }
      } catch (error) {
        console.error('Erro ao criar o ambiente:', error);
        setError('Erro ao criar o ambiente.');
      }
    } else {
      setError('Todos os campos são obrigatórios.');
    }
  };

  // Função para excluir um ambiente
  const handleDeleteAmbient = async (ambientId: string) => {
    console.log('ID do ambiente a ser excluído:', ambientId); // Verifique se o ID está correto
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o ambiente?`);
    if (confirmDelete) {
      try {
<<<<<<< HEAD
        const response = await fetch(`http://127.0.0.1:8000/api/ambientes/${ambientId}`, {
          method: 'DELETE'
        });
=======
        const response = await fetch(`http://localhost:8000/api/ambientes/deletar/${ambientId}`, {
  method: 'DELETE'
});


>>>>>>> 5743be7bc4d6e64da728e2b4b0f35b19959d6165
        if (response.ok) {
          setAmbientList((prevList) => prevList.filter((ambient) => ambient.id !== ambientId));
        } else {
          const errorData = await response.json();
          console.error('Erro ao excluir o ambiente:', errorData);
          setError('Falha ao excluir o ambiente.');
        }

      } catch (error) {
        console.error('Erro ao excluir o ambiente:', error);
        setError('Erro ao excluir o ambiente.');
      }
    }
  };


  // Função para selecionar um ambiente para edição
  const handleSelectAmbient = (ambient: any) => {
    setSelectedAmbient(ambient);
    setAmbientName(ambient.nome); // Preenche o campo de edição com o nome do ambiente
    setAmbientType(ambient.tipo); // Preenche o tipo
    setAmbientDescription(ambient.descricao); // Preenche a descrição
    setAmbientStatus(ambient.status); // Preenche o status
  };

  // Função para salvar a alteração do nome do ambiente
  const handleUpdateAmbient = async () => {
    if (selectedAmbient && ambientName && ambientType && ambientDescription && ambientStatus) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/ambientes/${selectedAmbient.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: ambientName,
            tipo: ambientType,
            descricao: ambientDescription,
            status: ambientStatus
          })
        });

        if (response.ok) {
          const updatedAmbient = await response.json(); // Obtém o ambiente atualizado da resposta
          setAmbientList(
            ambientList.map((ambient) =>
              ambient.id === selectedAmbient.id
                ? updatedAmbient // Substitui pelo ambiente atualizado
                : ambient
            )
          );
          setSelectedAmbient(null);
          setAmbientName('');
          setAmbientType('');
          setAmbientDescription('');
          setAmbientStatus('');
          setError(null);
        } else {
          const errorData = await response.json();
          console.error('Erro ao atualizar o ambiente:', errorData);
          setError('Falha ao atualizar o ambiente.');
        }
      } catch (error) {
        console.error('Erro ao atualizar o ambiente:', error);
        setError('Erro ao atualizar o ambiente.');
      }
    } else {
      setError('Todos os campos são obrigatórios.');
    }
  };

  return (
<<<<<<< HEAD
    <>
      <MenuAdmin />
      <AdminContainer>
        <AdminTitle>Gerenciamento de Ambientes</AdminTitle>

        <AdminSection>
          <SectionTitle>Cadastrar Sala</SectionTitle>

          {/* Selecione um ambiente para edição */}
          <CreateAmbient>
=======
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
          <AmbientInput
            type="text"
            value={ambientType}
            onChange={(e) => setAmbientType(e.target.value)}
            placeholder="Tipo do ambiente"
          />
          <AmbientInput
            type="text"
            value={ambientDescription}
            onChange={(e) => setAmbientDescription(e.target.value)}
            placeholder="Descrição do ambiente"
          />
          <AmbientInput
            type="text"
            value={ambientStatus}
            onChange={(e) => setAmbientStatus(e.target.value)}
            placeholder="Status do ambiente"
          />
          <CreateButton onClick={handleCreateAmbient}>Criar Novo Ambiente</CreateButton>

          {/* Exibe a mensagem de erro se o nome do ambiente for duplicado */}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </CreateAmbient>

        <AmbientList>
          <h3>Ambientes Criados:</h3>
          <ul>
            {ambientList.length > 0 ? (
              ambientList.map((ambient: any, index: number) => (
                <li key={index} onClick={() => handleSelectAmbient(ambient)}>
                  {ambient.nome} - {ambient.tipo} - {ambient.status}

                  {/* Botão de exclusão */}
                  <DeleteButton
                    onClick={(e) => {
                      e.stopPropagation(); // Impede que o clique no botão dispare o clique no <li>
                      handleDeleteAmbient(ambient.id); // Chama a função de exclusão
                    }}
                  >
                    Excluir
                  </DeleteButton>
                </li>
              ))
            ) : (
              <p>Nenhum ambiente criado ainda.</p>
            )}
          </ul>
        </AmbientList>


        {selectedAmbient && (
          <div>
            <h3>Alterar Ambiente Selecionado</h3>
>>>>>>> 5743be7bc4d6e64da728e2b4b0f35b19959d6165
            <AmbientInput
              type="text"
              value={ambientName}
              onChange={(e) => setAmbientName(e.target.value)}
              placeholder="Nome do novo ambiente"
            />
            <AmbientInput
              type="text"
              value={ambientType}
              onChange={(e) => setAmbientType(e.target.value)}
              placeholder="Tipo do ambiente"
            />
            <AmbientInput
              type="text"
              value={ambientDescription}
              onChange={(e) => setAmbientDescription(e.target.value)}
              placeholder="Descrição do ambiente"
            />
            <AmbientInput
              type="text"
              value={ambientStatus}
              onChange={(e) => setAmbientStatus(e.target.value)}
              placeholder="Status do ambiente"
            />
            <CreateButton onClick={handleCreateAmbient}>Criar Novo Ambiente</CreateButton>

            {/* Exibe a mensagem de erro se o nome do ambiente for duplicado */}
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </CreateAmbient>

          <AmbientList>
            <h3>Ambientes Criados:</h3>
            <ul>
              {ambientList.length > 0 ? (
                ambientList.map((ambient: any, index: number) => (
                  <li key={index} onClick={() => handleSelectAmbient(ambient)}>
                    {ambient.nome} - {ambient.tipo} - {ambient.status}
                    <DeleteButton onClick={() => handleDeleteAmbient(ambient.id)}>Excluir</DeleteButton>
                  </li>
                ))
              ) : (
                <p>Nenhum ambiente criado ainda.</p>
              )}
            </ul>
          </AmbientList>

          {selectedAmbient && (
            <div>
              <h3>Alterar Ambiente Selecionado</h3>
              <AmbientInput
                type="text"
                value={ambientName}
                onChange={(e) => setAmbientName(e.target.value)}
                placeholder="Novo nome do ambiente"
              />
              <AmbientInput
                type="text"
                value={ambientType}
                onChange={(e) => setAmbientType(e.target.value)}
                placeholder="Novo tipo do ambiente"
              />
              <AmbientInput
                type="text"
                value={ambientDescription}
                onChange={(e) => setAmbientDescription(e.target.value)}
                placeholder="Nova descrição"
              />
              <AmbientInput
                type="text"
                value={ambientStatus}
                onChange={(e) => setAmbientStatus(e.target.value)}
                placeholder="Novo status"
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
    </>
  );
};

export default Admin;
