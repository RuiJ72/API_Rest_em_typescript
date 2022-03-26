import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController {
    async handle( resquest: Request, response: Response) {
        const deleteUserService = new DeleteUserService();

        const { id } = resquest.params;


        //if (id === undefined) {
          //  return response.status(400).json({ mensagem: 'Informe o Id na rota'})
        //}

        await deleteUserService.execute({ id })

        return response.status(204).json()
    }
}


export { DeleteUserController }