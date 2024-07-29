const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let pedidos = [];
let rotas = [];

// Retorna a lista de pedidos
app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

// Cria um novo pedido
app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.status(201).json(pedido);
});

// Retorna a lista de rotas
app.get('/rotas', (req, res) => {
    res.json(rotas);
});

// Cria uma nova rota
app.post('/rotas', (req, res) => {
    const rota = req.body;
    rotas.push(rota);
    res.status(201).json(rota);
});

// Verifica a melhor rota de entrega
app.get('/melhor-rota/:id', (req, res) => {
    const rotaId = parseInt(req.params.id, 10);
    const rota = rotas.find(r => r.id === rotaId);

    if (!rota) {
        return res.status(404).json({ message: 'Rota não encontrada' });
    }

    // Simulação de lógica para encontrar a melhor rota de entrega
    const melhorRota = pedidos.map(pedido => ({
        ...pedido,
        rota
    }));

    res.json(melhorRota);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
