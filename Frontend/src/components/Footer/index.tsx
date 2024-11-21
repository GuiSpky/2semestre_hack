"use client";

import { FooterContainer, FooterLink, FooterText } from "./style";


export const Footer = () => {
  return (
        <FooterContainer>
          <FooterText>
            © {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
            <FooterLink href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </FooterLink>
          </FooterText>
        </FooterContainer>
  );
};
