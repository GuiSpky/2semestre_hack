"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonRegister, Container, ErrorMessage, Form, Input, Text, Title } from "./style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setError(""); // Limpa erros

    // Simulação de autenticação (substituir pelo backend futuramente)
    if (email === "user@example.com" && password === "password") {
      alert("Login realizado com sucesso!");
      router.push("/"); // Redireciona para a Home
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Entrar</Button>
        <Text>Não tem uma conta?</Text>
        <ButtonRegister
          type="button"
          onClick={() => router.push("/register")}
        >
          Registrar
        </ButtonRegister>
      </Form>
    </Container>
  );
};

export default LoginPage;
