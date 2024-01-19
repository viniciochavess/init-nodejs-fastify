import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterUserMake } from "../../make/RegisterUserMake";
import { InvalidCredentialsError } from "../../error/Invalid-credentials-error";

export async function RegisterController(req:FastifyRequest, reply:FastifyReply){

    const schemaBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password_hash:z.string().min(4)
    })

    const {email,name,password_hash} = schemaBody.parse(req.body)

    try {
        const registerUserUseCase = await RegisterUserMake()
        const user = await registerUserUseCase.execute({email,name,password_hash})
        reply.send(user).status(200)
        
    } catch (error) {
        if( error instanceof InvalidCredentialsError){
            reply.send(error.message).status(500)
        }

        reply.send().status(505)
    }


}