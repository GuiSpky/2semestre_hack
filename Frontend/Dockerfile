# Etapa 1: Builder
FROM node:18-alpine AS builder

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o código-fonte para o container
COPY . .

# Gera a aplicação para produção
RUN npm run build 

# Etapa 2: Produção
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos necessários do estágio de construção
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public

# Garante que apenas dependências de produção sejam instaladas
RUN npm install --only=production

# Comando de inicialização
CMD ["npm", "start"]
