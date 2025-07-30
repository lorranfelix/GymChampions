const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importando a conexão com o banco de dados
const conn = require('./db/conn');  

conn(); // Iniciando a conexão com o MongoDB

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro MongoDB:", err));


// Rota GET
app.get('/', (req, res) => {
  res.json({ mensagem: "API Unreal está online 1.1" });
});



// Porta para o Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
