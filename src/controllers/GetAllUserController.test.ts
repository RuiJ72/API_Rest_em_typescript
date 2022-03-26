import createConnection from '../database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from '../utils/FakeData';


describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 200 quando listar todos os usuários', async() => {
        
        const mockUser = await fakeData.createUser()

        const getAllUserController = new GetAllUserController();

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome',
                email: 'qualquer@email.com'
            }

        } as Request

        const response = makeMockResponse()

        await getAllUserController.handle( request, response )

        expect(response.state.status).toBe(200)
    })
})

