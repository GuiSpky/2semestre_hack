export interface ISala {
    "id": number,
    "nome": string,
    "tipo": string,
    "status": "disponível" | "reservado" | "em manutenção",
    "descricao": string,
    "imagemg": string
}

export interface IUsuario {
    "id": number,
    "nome": string,
    "email": string,
    "senha": string,
    "role": string,
    "is_admin": boolean
}