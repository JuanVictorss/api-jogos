const express = require('express')
const app = express()

app.use(express.json())

const jogos = [
  { id: 1, nome: 'The Witcher 3: Wild Hunt' },
  { id: 2, nome: 'Red Dead Redemption 2' },
  { id: 3, nome: 'Elden Ring' }
]

app.get('/api/jogos', (req, res) => {
  res.json(jogos)
})

app.post('/api/jogos', (req, res) => {
  const novoJogo = {
    id: jogos.length + 1,
    nome: req.body.nome
  }
  jogos.push(novoJogo)
  res.status(201).json(novoJogo)
})

app.delete('/api/jogos/:id', (req, res) => {
  const idParaRemover = parseInt(req.params.id)
  const index = jogos.findIndex((jogo) => jogo.id === idParaRemover)

  if (index === -1) {
    return res.status(404).send()
  }

  jogos.splice(index, 1)
  res.status(204).send()
})

module.exports = app
