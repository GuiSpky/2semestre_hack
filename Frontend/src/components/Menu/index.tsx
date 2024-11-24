"use client"
import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"

interface ICategoria {
  id: number,
  nome: string
}

export const Menu = () => {

  // const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

  // useEffect(() => {

  //   axios.get(
  //     process.env.NEXT_PUBLIC_API_URL
  //     +
  //     '/categorias'
  //   )
  //     .then((resposta) => {
  //       // Quando é Array [ 123, 456 ]
  //       setCategorias(resposta.data)
  //     })
  //     .catch((err: AxiosError) => {
  //       console.log(err)
  //     })

  // }, [])

  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>

              <NavbarLinkExtended
                href={"/"}
                style={{
                  color: '#fff',
                }}
              >
                Hachathon
              </NavbarLinkExtended>

              <NavbarLink
                href={"/"}
              >
                Ambientes
              </NavbarLink>

              <NavbarLink
                href={"/reserva"}
              >
                Reserva
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