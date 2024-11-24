'use client'; // Add this at the top to mark the component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger text-center">{error}</p>}
          <button type="submit" className="btn btn-primary w-100 mb-3">Entrar</button>
        </form>
        <p className="text-center">
          Não tem uma conta? 
          <button 
            type="button" 
            className="btn btn-success mt-2 w-100"
            onClick={() => router.push("/register")}
          >
            Registrar
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
