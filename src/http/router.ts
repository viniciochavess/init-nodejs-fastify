import {FastifyInstance} from 'fastify'
import { RegisterController } from './controller/RegisterUserController'

export async function routerUser (app:FastifyInstance) {
    app.post('/register', RegisterController)
}