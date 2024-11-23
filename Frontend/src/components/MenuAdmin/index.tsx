"use client"
import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"

interface ICategoria {
  id: number,
  nome: string
}

export const MenuAdmin = () => {

  const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

  useEffect(() => {

    axios.get(
      process.env.NEXT_PUBLIC_API_URL
      +
      '/categorias'
    )
      .then((resposta) => {
        // Quando é Array [ 123, 456 ]
        setCategorias(resposta.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>

              <NavbarLinkExtended
                href={"/painelAdmin"}
                style={{
                  color: '#fff',
                }}
              >
                Painel Administrativo
              </NavbarLinkExtended>

              <NavbarLink
                href={"/painelAdmin"}
              >
                Ambientes
              </NavbarLink>

              <NavbarLink
                href={"/painelAdmin/ambiente"}
              >
                Gerenciar Ambientes
              </NavbarLink>

              <NavbarLink
                href={"/painelAdmin/historico"}
              >
                Histórico de Reservas
              </NavbarLink>

              <NavbarLink
                href={"/painelAdmin/usuario"}
              >
                Gerenciar Usuários
              </NavbarLink>

              <NavbarLink
                href={"/reserva"}
              >
                Criar Reserva
              </NavbarLink>

            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkExtended
              href={'/login'}
            >
              LogOut
            </NavbarLinkExtended>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </>
  )
}