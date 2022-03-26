import 'reflect-metadata';
import express from 'express';
import { router } from './routes' //Importação do router
import createConnection from './database';


createConnection();
const server = express();

server.use(express.json()) // Variável que permite receber json
server.use(router)






server.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000')
    
})

