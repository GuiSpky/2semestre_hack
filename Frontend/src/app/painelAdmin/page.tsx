'use client';
import { MenuAdmin } from "@/components/MenuAdmin";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";

const AmbientListPage = () => {
    const [ambientList, setAmbientList] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os ambientes da API
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
        fetchAmbientes(); // Carrega os ambientes ao montar o componente
    }, []);

    return (
        <>
            <MenuAdmin />
            <div className="container my-5 text-center">
                <h1 className="mb-4">Ambientes cadastrados</h1>
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
};

export default AmbientListPage;
