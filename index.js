require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Importando a conexão com o banco de dados
const conn = require('./db/conn');  

conn(); // Iniciando a conexão com o MongoDB

//routes
const routes = require('./routes/router');

app.use('/api', routes);





app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

// Porta para o Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
