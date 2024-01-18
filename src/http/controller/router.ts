import {FastifyInstance} from 'fastify'

export function routerUser (app:FastifyInstance) {
    app.get('/user',()=>{})
}