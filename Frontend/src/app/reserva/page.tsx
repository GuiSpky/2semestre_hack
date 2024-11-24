"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  PageContainer,
  Title,
  ErrorMessage,
  AmbientListContainer,
  FormContainer,
  Form,
  Input,
  Select,
  SubmitButton,
} from "./style"; // Supondo que você tenha estilos definidos
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Card } from "@/components/Card";

const ReservaPage = () => {
  const [ambientList, setAmbientList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedAmbiente, setSelectedAmbiente] = useState<number | null>(null);
  const [horarioInicio, setHorarioInicio] = useState<string>("");
  const [horarioFim, setHorarioFim] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fetchAmbientes = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/ambientes");
      setAmbientList(response.data.data); // Acesse a propriedade "data" do response
      setError(null);
    } catch (err) {
      console.error("Erro ao buscar ambientes:", err);
      setError("Não foi possível carregar a lista de ambientes.");
    }
  };

  useEffect(() => {
    fetchAmbientes(); // Chama a API para buscar os ambientes ao carregar o componente
  }, []);

  const handleReserva = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedAmbiente || !horarioInicio || !horarioFim) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/reservas", {
        id_ambiente: selectedAmbiente,
        horario_inicio: horarioInicio,
        horario_fim: horarioFim,
      });

      setSuccessMessage("Reserva realizada com sucesso!");
      setError(null);
      setSelectedAmbiente(null);
      setHorarioInicio("");
      setHorarioFim("");
      fetchAmbientes(); // Atualiza a lista de ambientes
    } catch (err) {
      console.error("Erro ao realizar a reserva:", err);
      setError("Erro ao realizar a reserva. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <Menu />
      <PageContainer>
        <Title>Lista de Ambientes</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <p>{successMessage}</p>}

        {/* Formulário de Reserva */}
        <FormContainer>
          <Form onSubmit={handleReserva}>
            <Title>Fazer Reserva</Title>
            <Select
              value={selectedAmbiente || ""}
              onChange={(e) => setSelectedAmbiente(Number(e.target.value))}
            >
              <option value="" disabled hidden>
                Selecione um ambiente
              </option>
              {ambientList.map((ambient: any) => (
                <option key={ambient.id} value={ambient.id}>
                  {ambient.nome}
                </option>
              ))}
            </Select>
            <Input
              type="time"
              value={horarioInicio}
              onChange={(e) => setHorarioInicio(e.target.value)}
              placeholder="Horário de Início"
            />
            <Input
              type="time"
              value={horarioFim}
              onChange={(e) => setHorarioFim(e.target.value)}
              placeholder="Horário de Fim"
            />
            <SubmitButton type="submit">Reservar</SubmitButton>
          </Form>
        </FormContainer>

        {/* Lista de Ambientes */}
        <AmbientListContainer>
          {ambientList.length > 0 ? (
            ambientList.map((ambient: any) => (
              <Card
                key={ambient.id}
                id={ambient.id}
                nome={ambient.nome}
                foto={ambient.foto}
                descricao={ambient.descricao}
                status={ambient.status}
                tipo={ambient.tipo}
              />
            ))
          ) : (
            <p>Não há ambientes cadastrados no momento.</p>
          )}
        </AmbientListContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default ReservaPage;
