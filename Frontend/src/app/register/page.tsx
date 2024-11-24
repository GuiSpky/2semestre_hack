"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Anchor,
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  Select,
  Text,
  Title
} from "./style";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!name || !email || !cargo || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError(""); // Limpa os erros

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          cargo,
          password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao registrar usuário.");
        return;
      }

      alert("Registro realizado com sucesso!");
      router.push("/login"); // Redireciona para a página de login
    } catch (err) {
      console.error("Erro ao registrar:", err);
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Title>Registrar</Title>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        >
          <option value="" disabled hidden>
            Selecione seu Cargo
          </option>
          <option value="Aluno">Aluno</option>
          <option value="Professor">Professor</option>
          <option value="Diretor">Diretor</option>
        </Select>
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Registrar</Button>
        <Text>
          Já possui conta?{" "}
          <Anchor onClick={() => router.push("/login")}>Login</Anchor>
        </Text>
      </Form>
    </Container>
  );
};

export default RegisterPage;
