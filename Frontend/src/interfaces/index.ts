export interface ISala {
    "id": number,
    "nome": string,
    "tipo": string,
    "descricao": string,
    "status": string,
}

export interface IUsuario {
    "id": number,
    "nome": string,
    "email": string,
    "senha": string,
    "role": string,
    "is_admin": boolean
}