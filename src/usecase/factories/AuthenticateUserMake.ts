import { PrismaUserRepository } from "@/repositories/prisma/UserRepository";
import { AuthenticateUserUseCase } from "@/usecase/authenticate";

export function AuthenticateUserMake(){
    const repo = new PrismaUserRepository();
    const useCase = new AuthenticateUserUseCase(repo);
    return useCase;
}