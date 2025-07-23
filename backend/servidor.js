// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para receber os dados do formulário
app.post('/api/salvar-nome', (req, res) => {
    const nome = req.body.nome;
    if (!nome) {
        return res.status(400).json({ erro: 'Nome é obrigatório.' });
    }

    const dados = { nome };

    // Salva os dados em um arquivo JSON
    fs.writeFile(
        path.join(__dirname, 'dados.json'),
        JSON.stringify(dados, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao salvar.' });
            }
            res.json({ sucesso: true, nome });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});