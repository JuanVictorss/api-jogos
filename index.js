const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

let jogos = [
  { id: 1, nome: "The Witcher 3: Wild Hunt" },
  { id: 2, nome: "Red Dead Redemption 2" },
  { id: 3, nome: "Elden Ring" },
];

app.get("/api/jogos", (req, res) => {
  res.json(jogos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
