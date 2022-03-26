import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController {
    async handle( request: Request, response: Response ) {
        const updateUserService = new UpdateUserService();
    
            // id, nome e email serão recebidos pela URL
            const { id, nome, email} = request.body


            if (id.length === 0) {
                return response.status(400).json({mensagem: 'id não informado'})
            }

            if (id.length === 0) {
                return response.status(400).json({mensagem: 'Informe o nome'})
        }

        await updateUserService.execute({ id, nome, email })

        return response.status(204).json()
    }
}

export { UpdateUserController }