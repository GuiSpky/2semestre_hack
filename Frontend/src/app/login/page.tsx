"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonRegister, Container, ErrorMessage, Form, Input, Text, Title } from "./style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setError(""); // Limpa erros

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "E-mail ou senha inválidos.");
        return;
      }

      alert("Login realizado com sucesso!");
      router.push("/"); // Redireciona para a Home

    } catch (err) {
      console.error("Erro ao realizar login:", err);
      setError("Ocorreu um erro no servidor. Tente novamente mais tarde.");
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
