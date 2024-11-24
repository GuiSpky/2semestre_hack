"use client"
import Image from "next/image"
import { Button, CardBody, TextButton, TextStatus, Title, TitleTipo } from "./style"
import { ISala } from "@/interfaces"
import { useRouter } from "next/navigation"

export const Card = (props: ISala) => {

    const router = useRouter()

    return (
        <CardBody>
            <Image
                src={`\/C:/fakepath/${props.foto}`}
                alt={props.nome}
                width={250}
                height={200}
            />
            <Title>{props.nome}</Title>
            <TitleTipo>{props.tipo}</TitleTipo>
            <TextStatus status={props.status}>{props.status}</TextStatus>
            <Button
                onClick={() => {
                    router.push('/sala/' + props.id)
                }}
            >
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}