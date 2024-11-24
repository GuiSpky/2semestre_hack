'use client';
import { MenuAdmin } from "@/components/MenuAdmin";
import React, { useState, useEffect } from 'react';
import { AmbientCard, AmbientDetail, AmbientListContainer, AmbientName, ErrorMessage, PageContainer, Title } from './style';
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
            <PageContainer>
                <Title>Lista de Ambientes</Title>
                {error ? (
                    <ErrorMessage>{error}</ErrorMessage>
                ) : (
                    <AmbientListContainer>
                        {ambientList.length > 0 ? (
                            ambientList.map((ambient) => (
                                <AmbientCard key={ambient.id}>
                                    <AmbientName>{ambient.nome}</AmbientName>
                                    <AmbientDetail>Tipo: {ambient.tipo}</AmbientDetail>
                                    <AmbientDetail>Descrição: {ambient.descricao}</AmbientDetail>
                                    <AmbientDetail>Status: {ambient.status}</AmbientDetail>
                                </AmbientCard>
                            ))
                        ) : (
                            <p>Não há ambientes cadastrados no momento.</p>
                        )}
                    </AmbientListContainer>
                )}
            </PageContainer>
            
        </>
    );
};
export default AmbientListPage;