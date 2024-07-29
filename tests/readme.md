# API de Pedidos e Rotas

Este projeto é uma API desenvolvida com Node.js e Express para gerenciar pedidos e rotas de entrega. A API inclui endpoints para criar e listar pedidos e rotas, e para determinar a melhor rota de entrega.

## Estrutura do Projeto

- **`index.js`**: Configuração do servidor Express e definição das rotas.
- **`tests/app.test.js`**: Testes de integração utilizando Jest e Supertest.

## Endpoints

- **GET /pedidos**
  - Retorna a lista de pedidos.
  
- **POST /pedidos**
  - Cria um novo pedido.

- **GET /rotas**
  - Retorna a lista de rotas.

- **POST /rotas**
  - Cria uma nova rota.

- **GET /melhor-rota/:id**
  - Verifica a melhor rota de entrega com base na rota cadastrada especificada pelo id.

## Requisitos

- Node.js (v14 ou superior)
- npm

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/viniciuscaua/api.git
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
3. Instale as dependências:
    ```bash   
   Se ainda não instalou, execute: npm install
4. Logo após, execute um por um esses comandos: 
    ```bash
    npm init -y
    npm install express body-parser
    npm install --save-dev jest supertest
## Testes

1. **Para executar os testes:**
   ```bash
   npm test
