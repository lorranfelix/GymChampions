require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro MongoDB:", err));

// Exemplo de schema simples
const Player = mongoose.model('Player', {
  nome: String,
  vida: Number,
  xp: Number
});

// Rota GET
app.get('/', (req, res) => {
  res.json({ mensagem: "API Unreal está online" });
});

// Rota POST - Salvar jogador
app.post('/player', async (req, res) => {
  const { nome, vida, xp } = req.body;
  const novoPlayer = new Player({ nome, vida, xp });
  await novoPlayer.save();
  res.json({ status: "Salvo com sucesso", player: novoPlayer });
});

// Rota GET - Listar jogadores
app.get('/player', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

// Porta para o Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
