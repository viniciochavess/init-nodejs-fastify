import fastify from 'fastify'
import { routerUser } from './http/router'
const app = fastify()

app.register(routerUser,{prefix:"/users"})
export default app