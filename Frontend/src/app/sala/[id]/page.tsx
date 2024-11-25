'use client';

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

interface Ambient {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  status: string;
  foto: string | null;
}

const SalaDetails = ({ params }: { params: { id: string } }) => {
  const [ambient, setAmbient] = useState<Ambient | null>(null); // Armazena os dados do ambiente
  const [error, setError] = useState<string | null>(null); // Mensagem de erro caso não encontre o ambiente
  const { id } = params; // Pega o id diretamente de params

  // Função para buscar os detalhes do ambiente
  const fetchAmbientDetails = async () => {
    if (id) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/ambientes/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar os detalhes do ambiente.');
        }
        const jsonData = await response.json();
        setAmbient(jsonData); // Armazena os dados do ambiente
      } catch (error) {
        console.error('Erro ao buscar detalhes do ambiente:', error);
        setError('Não foi possível carregar os detalhes deste ambiente.');
      }
    }
  };

  useEffect(() => {
    fetchAmbientDetails(); // Chama a API quando o id estiver disponível
  }, [id]);

  if (error) {
    return (
      <div className="container">
        <h1 className="text-danger">{error}</h1>
      </div>
    );
  }

  if (!ambient) {
    return (
      <div className="container">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <Menu />
      <div className="container">
        <h1 className="text-center my-4">Detalhes do Ambiente</h1>

        <div className="mb-5">
          <h2 className="text-success">{ambient.nome}</h2>
          <div className="mb-4">
            {ambient.foto ? (
              <img
                src={`http://127.0.0.1:8000/storage/${ambient.foto}`}
                alt={ambient.nome}
                className="img-fluid"
                style={{ maxWidth: '100%', borderRadius: '5px' }}
              />
            ) : (
              <img
                src="/default-image.jpg"
                alt={ambient.nome}
                className="img-fluid"
                style={{ maxWidth: '100%', borderRadius: '5px' }}
              />
            )}
            <p><strong>Tipo:</strong> {ambient.tipo}</p>
            <p><strong>Descrição:</strong> {ambient.descricao}</p>
            <p><strong>Status:</strong> {ambient.status}</p>
          </div>

          <div className="d-flex">
            <button className="btn btn-warning me-2" onClick={() => window.history.back()}>
              Voltar para a lista de ambientes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalaDetails;
