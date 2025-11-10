const request = require("supertest");
const app = require("./index");

describe("API de Jogos", () => {
  it("GET /api/jogos tem que retornar status 200 e uma lista de jogos", async () => {
    const response = await request(app)
      .get("/api/jogos")
      .expect(200)
      .expect("Content-Type", /json/);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(3);
  });

  // Teste para a rota POST /api/jogos
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
