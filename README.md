# API de Jogos

Esta é uma API REST simples para gerenciar uma lista de jogos.

# Workflow Utilizado

Github Flow. Este fluxo de trabalho é ideal por sua simplicidade e agilidade, sendo perfeito para projetos que possuem uma única versão em produção e onde novas funcionalidades são entregues com frequência. Cada nova feature foi desenvolvida em uma branch separada, garantindo que a branch main esteja sempre estável e pronta para um deploy.

## Como Executar

1.  Instale as dependências:
    ```bash
    npm install
    ```
2.  Inicie o servidor:
    ```bash
    node server.js
    ```
3.  A API estará disponível em `http://localhost:8080`.

## Rotas

- **GET /api/jogos**: Retorna a lista de todos os jogos.

* **POST /api/jogos**: Adiciona um novo jogo.

  - **Body (JSON):** `{ "nome": "Nome do Jogo" }`

* **DELETE /api/jogos/:id**: Remove um jogo pelo ID.
  - **Retorno 204:** Removido com sucesso.
  - **Retorno 404:** Jogo não encontrado.

---

## Integração Contínua (CI) e Testes

A aplicação utiliza **GitHub Actions** para garantir a qualidade do código através de fluxos de trabalho que executam testes em eventos de Pull Request e Push para a `main`.

- **Verificação de Estilo (Lint):** Garante a conformidade do código com o padrão.
- **Cobertura de Testes:** A cobertura total deve ser de, no mínimo, **90%** para que o código seja mesclado na `main`.

* **CI em Pull Request:** Garante que a nova feature passe nos testes antes de ser mesclada.
* **CI em Push:** Confirma a estabilidade final do código na branch principal.

**Para rodar os testes localmente:**

```bash
npm test
```
