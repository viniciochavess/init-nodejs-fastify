import { InMemoryUserRepository } from "@/repositories/inMemory/inMemoryUser";
import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository";
import { RegisterUserUseCase } from "../usecase/RegisterUserUseCase";

export async function RegisterUserMake() {
  const repo = new PrismaUserRepository();
  const repoMemory = new InMemoryUserRepository();
  const make = new RegisterUserUseCase(repo);
  return make;
}
