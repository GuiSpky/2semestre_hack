'use client'
import styled from "styled-components";


export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
`;

export const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #1e90ff;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;