# API de Jogos

Esta é uma API REST simples para gerenciar uma lista de jogos.

## Como Executar

1.  Instale as dependências:
    ```bash
    npm install
    ```
2.  Inicie o servidor:
    ```bash
    node index.js
    ```
3.  A API estará disponível em `http://localhost:8080`.

## Rotas

- **GET /api/jogos**: Retorna a lista de todos os jogos.

* **POST /api/jogos**: Adiciona um novo jogo.
  - **Body (JSON):** `{ "nome": "Nome do Jogo" }`
