import { Request, Response } from 'express'

import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const createUserService = new CreateUserService()

    const user = await createUserService.handle({ email, password })

    return res.json(user)
  }
}
