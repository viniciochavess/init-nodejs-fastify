import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository";
import { RegisterUserUseCase } from "../usecase/RegisterUserUseCase";

export async function RegisterUserMake(){
    const repo = new PrismaUserRepository()
    const make = new RegisterUserUseCase(repo)
    return make
}