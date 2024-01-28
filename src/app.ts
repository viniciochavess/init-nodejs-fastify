import fastify from 'fastify'
import { routerUser } from './http/router'
import { ZodError } from 'zod'
const app = fastify()

app.register(routerUser,{prefix:"/users"})
app.setErrorHandler((error, request, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({message:"Validation error",issue:error.format()})
    }
})
export default app