'use client'; // Indica que é um componente client-side

import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { ISala } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface IReqSala {
  data: Array<ISala>;
}

export default function Home() {
  const [ambientList, setAmbientList] = useState<ISala[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Verifica login do usuário
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const content = await response.json();
        console.log(content);
      } catch (error) {
        console.error("Erro ao verificar login:", error);
      }
    })();
  }, []);

  // Busca ambientes
  const fetchAmbientes = async () => {
    try {
      const response = await axios.get<IReqSala>('http://127.0.0.1:8000/api/ambientes');
      setAmbientList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setError('Não foi possível carregar a lista de ambientes.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAmbientes();
  }, []);

  return (
    <>
      <Menu />
      <div className="container my-5 text-center">
        <h1 className="mb-4">Ambientes</h1>
        {loading && <p>Carregando...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && ambientList.length === 0 && (
          <p>Nenhum ambiente encontrado.</p>
        )}
        <div className="row justify-content-center">
          {ambientList.map((ambient) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={ambient.id}>
              <Card
                id={ambient.id}
                nome={ambient.nome}
                foto={ambient.foto}
                descricao={ambient.descricao}
                status={ambient.status}
                tipo={ambient.tipo}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
