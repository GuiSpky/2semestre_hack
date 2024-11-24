'use client'; // Add this at the top to mark the component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    // Simulação de registro (substituir pelo backend futuramente)
    if (email !== "existing@example.com") {
      alert("Registro realizado com sucesso!");
      router.push("/login"); // Redireciona para a página de login
    } else {
      setError("E-mail já registrado.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Registrar</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <select
              className="form-select"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione seu Cargo
              </option>
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
              <option value="Diretor">Diretor</option>
            </select>
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirme a Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger text-center">{error}</p>}
          <button type="submit" className="btn btn-primary w-100 mb-3">Registrar</button>
        </form>
        <p className="text-center">
          Já possui conta? <span
            className="text-primary cursor-pointer"
            onClick={() => router.push("/login")}
            style={{ textDecoration: 'underline' }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
