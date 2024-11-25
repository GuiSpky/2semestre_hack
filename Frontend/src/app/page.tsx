'use client'; // Add this at the top to mark the component as a Client Component

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
      <div className="container my-5 text-center">
        <h1 className="mb-4">Ambientes</h1>
        {error && <p className="text-danger">{error}</p>}
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
