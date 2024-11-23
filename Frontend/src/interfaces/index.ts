export interface ISala {
    imagemg: any;
    "id": number,
    "nome": string,
    "tipo": string,
    "status": "disponível" | "reservado" | "em manutenção",
    "descricao": string,
}

export interface IUsuario {
    "id": number,
    "nome": string,
    "email": string,
    "senha": string,
    "role": string,
    "is_admin": boolean
}