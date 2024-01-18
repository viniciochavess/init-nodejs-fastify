import { prisma } from "../../lib/database/prisma";
import { IRepositoryUser, IUser } from "../interface/IRepositoryUser";

export class PrismaUserRepository implements IRepositoryUser {
    constructor(){}
    async create({email, name, password_hash}: IUser): Promise<IUser> {
        const user = await prisma.users.create({data:{name,password_hash,email}})
        return user
    }
   async findByEmail(email: string): Promise<IUser | null> {
        const user = await prisma.users.findUnique({where:{email}})
        if(!user){
            return null
        }
        return user
    }
    async findById(id: string): Promise<IUser | null> {
        const user = await prisma.users.findUnique({where:{id}})
        if(!user){
            return null
        }
        return user
    }
    async listUsers(): Promise<IUser[] | null> {
        const users = await prisma.users.findMany()
        if(!users){
            return null
        }
        return users
    }
}