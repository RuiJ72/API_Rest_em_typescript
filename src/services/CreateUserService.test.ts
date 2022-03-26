//Teste da camada service

import { getConnection } from 'typeorm';
import createConnection from '../database';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from './CreateUserService';
import { GetAllUserService } from './GetAllUserService';


describe('GetAllUserService', () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async() => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.close();
    })

    

    it('Deve retornar todos os usuários cadastrados', async() => {
        const createUserService = new CreateUserService();

        await createUserService.execute({
        id: uuid(),
        nome: 'Algum usuário',
        email: 'algum@gmail.com',
    })
    
        await createUserService.execute({
        id: uuid(),
        nome: 'outrousuario',
        email: '',
    })
        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'algum@gmail.com',
            },
            {
                nome: 'outrousuario',
                email: '',
            }
        ]
        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)
    })

})