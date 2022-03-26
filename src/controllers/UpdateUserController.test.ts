import { UpdateUserController  } from "./UpdateUserController";
import createConnection from '../database';
import { getConnection } from 'typeorm';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { FakeData } from "../utils/FakeData";
import { request } from "express";



describe('UpdateUserController', () => {
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

    it('Deve retornar status 204 quando usuário editado', async () => {
        
        const updateUserController = new UpdateUserController(); 

        const response = makeMockResponse();

        await updateUserController.handle( request, response )

        expect(response.state.status).toBe(204)
    })
})