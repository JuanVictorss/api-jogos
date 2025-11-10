const request = require("supertest");
const app = require("./index");

// Teste para a rota POST /api/jogos

describe("API de Jogos", () => {
  it("GET /api/jogos tem que retornar status 200 e uma lista de jogos", async () => {
    const response = await request(app)
      .get("/api/jogos")
      .expect(200)
      .expect("Content-Type", /json/);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(3);
  });

  it("POST /api/jogos tem que adicionar um novo jogo e retornar status 201", async () => {
    const novoJogo = { nome: "Hogwarts Legacy" };
    const response = await request(app)
      .post("/api/jogos")
      .send(novoJogo)
      .expect(201)
      .expect("Content-Type", /json/);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome", novoJogo.nome);
  });
});

describe("DELETE /api/jogos/:id", () => {
  it("DELETE /api/jogos/:id deve retornar status 204 e remover o jogo se ele existir", async () => {
    const idExistente = 1;

    await request(app).delete(`/api/jogos/${idExistente}`).expect(204);

    const response = await request(app).get("/api/jogos");
    const jogoRemovido = response.body.find((jogo) => jogo.id === idExistente);

    expect(jogoRemovido).toBeUndefined();
  });

  it("DELETE /api/jogos/:id deve retornar status 404 se o jogo não existir", async () => {
    const idInexistente = 999;

    await request(app).delete(`/api/jogos/${idInexistente}`).expect(404);
  });
});
