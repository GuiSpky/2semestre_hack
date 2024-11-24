'use client'; // Add this at the top to mark the component as a Client Component

import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { ISala } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

interface IReqSala {
  data: Array<ISala>;
}

export default function Home() {
  const [ambientList, setAmbientList] = useState<ISala[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAmbientes = async () => {
    try {
      const response = await axios.get<IReqSala>('http://127.0.0.1:8000/api/ambientes');
      setAmbientList(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setError('Não foi possível carregar a lista de ambientes.');
    }
  };

  useEffect(() => {
    fetchAmbientes();
  }, []);

  return (
    <>
      <Menu />
      <div style={{ paddingLeft: '6%', paddingRight: '6%', textAlign: 'center' }}>
        <h1>Ambientes</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {error && <p>{error}</p>}
          {ambientList.map((ambient) => (
            <Card
              key={ambient.id}
              id={ambient.id}
              nome={ambient.nome}
              foto={ambient.foto}
              descricao={ambient.descricao}
              status={ambient.status}
              tipo={ambient.tipo}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}