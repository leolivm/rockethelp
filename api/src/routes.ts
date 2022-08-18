import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController'

const routes = Router()
const createUserController = new CreateUserController()

routes.post('/signup', createUserController.createUser)

export { routes }
