"use client";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 shadow-sm">
      <p className="mb-0">
        © {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
        <a 
          href="https://www.example.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary ms-2 text-decoration-none"
        >
          Política de Privacidade
        </a>
      </p>
    </footer>
  );
};
