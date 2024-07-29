const request = require('supertest');
const app = require('../index');


describe('Testes de Integração', () => {
    let pedidoId;
    let rotaId;

    // Testa a rota GET /pedidos
    it('Deve retornar a lista de pedidos', async () => {
        const response = await request(app).get('/pedidos');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    // Testa a rota POST /pedidos
    it('Deve criar um novo pedido', async () => {
        const pedido = {
            endereco: { coordenadas: [40.7128, -74.0060] },
            latitude: 40.7128,
            longitude: -74.0060,
            produto: 'Produto 1',
            quantidade: 2
        };
        const response = await request(app).post('/pedidos').send(pedido);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(pedido);
        pedidoId = response.body.id;
    });

    // Testa a rota GET /rotas
    it('Deve retornar a lista de rotas', async () => {
        const response = await request(app).get('/rotas');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    // Testa a rota POST /rotas
    it('Deve criar uma nova rota', async () => {
        const rota = {
            id: 1,
            latitude: 40.7128,
            longitude: -74.0060
        };
        const response = await request(app).post('/rotas').send(rota);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(rota);
        rotaId = rota.id;
    });

    // Testa a rota GET /melhor-rota/:id
    it('Deve retornar a melhor rota de entrega', async () => {
        const response = await request(app).get(`/melhor-rota/${rotaId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        response.body.forEach(pedido => {
            expect(pedido.rota).toBeDefined();
        });
    });
});
