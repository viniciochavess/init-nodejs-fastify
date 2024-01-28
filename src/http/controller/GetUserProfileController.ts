import { UserNotFoundError } from "@/error/user-not-found";
import { GetUserProfileMake } from "@/make/get-user-profile-make";
import { FastifyReply, FastifyRequest } from "fastify";
import {z} from "zod";

export async function GetUserProfileController(req:FastifyRequest,reply:FastifyReply){
    const schema = z.object({
        id:z.string().uuid()
    })
    const {id} = schema.parse(req.params);
    

    try{
        const userGetProfile = GetUserProfileMake()
        const user = await userGetProfile.execute(id)
       
    }catch(err){

        if(err instanceof UserNotFoundError){
            reply.code(404).send({message:err.message})
        }


    }
    reply.status(200).send({message:"ok"})
}