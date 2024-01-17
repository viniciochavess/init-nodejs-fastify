import 'dotenv/config'
import {z} from 'zod'

const schemaEnv = z.object({
    NODE_ENV: z.enum(['production', 'development','testing']).default('development'),
    PORT: z.coerce.number().default(3333)
})


const _env = schemaEnv.safeParse(process.env)


if(_env.success == false){
    throw new Error('Error environment variable')
}

export const env = _env.data