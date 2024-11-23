"use client";

import { Menu } from "@/components/Menu"
import { ISala } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"

export default function Sala(
  { params }: { params: { id: string } }
) {

  const [sala, setSala] = useState<ISala>()

    useEffect(() => {

        console.log(process.env.APP_URL + '/ambientes')
        axios.get(process.env.APP_URL + '/ambientes',
            {
                // /salas?id=132
                params: {
                    id: params.id
                }
            }
        ).then((dados) => {
            setSala(dados.data[0])
        }).catch((erro) => {
            console.log('erro')
            console.log(erro)
        })

    }, [params])

    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                {
                    sala ?
                        <>
                            <h1>Sala</h1>
                            <Row>
                                <Col4>
                                    {/* <img
                                        style={{
                                            width: '100%'
                                        }}
                                        src={`/imagens/${sala.imagemg}`}
                                    /> */}
                                </Col4>
                                <Col6>
                                    <h3>{sala.nome}</h3>
                                    <p
                                        style={{
                                            textDecoration: 'line-through'
                                        }}
                                    >
                                        R$ {sala.tipo}
                                    </p>
                                    <p
                                        style={{
                                            color: 'red',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        R$ {sala.status}
                                    </p>

                                    <form>
                                        <Input
                                            type="number"
                                            name="quantidade"
                                            defaultValue={1}
                                            min={'1'}
                                            required
                                        />

                                        <Button type="submit">
                                            <TextButton>
                                                Adicionar ao carrinho
                                            </TextButton>
                                        </Button>
                                    </form>
                                </Col6>

                            </Row>
                        </>
                        :
                        <h2>Nenhuma sala encontrado :/</h2>
                }

            </div>
        </>
    )

}
