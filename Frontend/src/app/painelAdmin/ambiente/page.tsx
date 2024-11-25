'use client';

import React, { useState, useEffect } from 'react';
import { MenuAdmin } from '@/components/MenuAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '@/components/Footer';

const Admin = () => {
  const [ambientName, setAmbientName] = useState<string>(''); // Nome do novo ambiente ou ambiente a ser alterado
  const [ambientType, setAmbientType] = useState<string>(''); // Tipo do ambiente
  const [ambientDescription, setAmbientDescription] = useState<string>(''); // Descrição do ambiente
  const [ambientStatus, setAmbientStatus] = useState<string>(''); // Status do ambiente
  const [ambientFoto, setAmbientFoto] = useState<File | null>(null); // Armazenar o arquivo de imagem
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
    fetchAmbientes(); // Chama a API para buscar os ambientes ao carregar o componente
  }, []);

  // Função para criar novo ambiente
  const handleCreateAmbient = async () => {
    if (ambientList.some((ambiente) => ambiente.nome === ambientName)) {
      setError('Já existe um ambiente com esse nome.');
      return;
    }

    if (ambientName && ambientType && ambientDescription && ambientStatus) {
      const formData = new FormData();
      formData.append('nome', ambientName);
      formData.append('tipo', ambientType);
      formData.append('descricao', ambientDescription);
      formData.append('status', ambientStatus);
      if (ambientFoto) formData.append('foto', ambientFoto);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/ambientes', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
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
          setAmbientFoto(null);
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

  // Função para selecionar um ambiente para edição
  const handleSelectAmbient = (ambient: any) => {
    setSelectedAmbient(ambient);
    setAmbientName(ambient.nome); // Preenche o campo de edição com o nome do ambiente
    setAmbientType(ambient.tipo); // Preenche o tipo
    setAmbientDescription(ambient.descricao); // Preenche a descrição
    setAmbientStatus(ambient.status); // Preenche o status
    setAmbientFoto(null); // Limpar a foto para não tentar atribuir valor programaticamente
  };

  const handleClearFields = () => {
    setAmbientName('');
    setAmbientType('');
    setAmbientDescription('');
    setAmbientStatus('');
    setAmbientFoto(null);
    setSelectedAmbient(null);
    setError(null); // Limpa a mensagem de erro, se houver
  };

  // Função para salvar a alteração do nome do ambiente
  const handleUpdateAmbient = async () => {
    if (selectedAmbient && ambientName && ambientType && ambientDescription && ambientStatus) {
      const updatedAmbient = {
        nome: ambientName,
        tipo: ambientType,
        descricao: ambientDescription,
        status: ambientStatus,
      };

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/ambientes/${selectedAmbient.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedAmbient),
        });


        if (response.ok) {
          const updatedData = await response.json();
          setAmbientList(
            ambientList.map((ambient) =>
              ambient.id === selectedAmbient.id ? updatedData : ambient
            )
          );
          setSelectedAmbient(null);
          setAmbientName('');
          setAmbientType('');
          setAmbientDescription('');
          setAmbientStatus('');
          setAmbientFoto(null);
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

  // Função para excluir ambiente
  const handleDeleteAmbient = async (ambientId: number) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este ambiente?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/ambientes/${ambientId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setAmbientList(ambientList.filter((ambient) => ambient.id !== ambientId)); // Remove o ambiente da lista
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

  return (
    <>
      <MenuAdmin />
      <div className="container">
        <h1 className="text-center my-4">Gerenciamento de Ambientes</h1>

        <div className="mb-5">
          <h2 className="text-success">Cadastro de Ambiente</h2>

          <div className="mb-4">
            <input
              type="text"
              className="form-control mb-2"
              value={ambientName}
              onChange={(e) => setAmbientName(e.target.value)}
              placeholder="Nome do novo ambiente"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={ambientType}
              onChange={(e) => setAmbientType(e.target.value)}
              placeholder="Tipo do ambiente"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={ambientDescription}
              onChange={(e) => setAmbientDescription(e.target.value)}
              placeholder="Descrição do ambiente"
            />
            <select
              className="form-control mb-2"
              value={ambientStatus}
              onChange={(e) => setAmbientStatus(e.target.value)}
            >
              <option value="" disabled hidden>Selecione o Status</option>
              <option value="Disponível">Disponível</option>
              <option value="Em manutenção">Em manutenção</option>
            </select>
            <input
              type="file"
              className="form-control mb-2"
              accept="image.*"
              onChange={(e) => e.target.files && setAmbientFoto(e.target.files[0])}
            />
            <div className="d-flex">
              {!selectedAmbient ? (
                <button className="btn btn-success mb-3 me-2" onClick={handleCreateAmbient}>
                  Criar Novo Ambiente
                </button>
              ) : (
                <button className="btn btn-primary mb-3 me-2" onClick={handleUpdateAmbient}>
                  Salvar Alterações
                </button>
              )}
              <button className="btn btn-secondary mb-3" onClick={handleClearFields}>
                Limpar Campos
              </button>
            </div>

            {error && <p className="text-danger">{error}</p>}
          </div>

          <div>
            <h3>Ambientes Criados:</h3>
            <ul className="list-group">
              {ambientList.length > 0 ? (
                ambientList.map((ambient) => (
                  <li key={ambient.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      {ambient.foto ? (
                        <img
<<<<<<< HEAD
                          src={'http://127.0.0.1:8000/storage/' + ambient.foto}
=======
                          src={'http://127.0.0.1:8000/storage/'+ambient.foto}
>>>>>>> e2a63e2fc3c0810b880805638f7ed305ed717382
                          alt={ambient.nome}
                          className="img-fluid"
                          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', borderRadius: '5px' }}
                        />
                      ) : (
                        <img
                          src="/default-image.jpg"
                          alt={ambient.nome}
                          className="img-fluid"
                          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', borderRadius: '5px' }}
                        />
                      )}
                      <strong>{ambient.nome}</strong> - {ambient.tipo}
                    </div>
                    <div className="justify-content-end">
                      <button
                        className="btn btn-warning me-2 "
                        onClick={() => handleSelectAmbient(ambient)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteAmbient(ambient.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-warning">Não há ambientes cadastrados.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
