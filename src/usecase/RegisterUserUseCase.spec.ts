import { test, expect, describe, it, afterEach, beforeEach } from "vitest";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { IRepositoryUser } from "@/repositories/interface/IRepositoryUser";
import { InMemoryUserRepository } from "@/repositories/inMemory/inMemoryUser";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "@/usecase/error/Invalid-credentials-error";

let repo: IRepositoryUser;
let sut: RegisterUserUseCase;
describe("RegisterUserUseCase", () => {
  beforeEach(() => {
    repo = new InMemoryUserRepository();
    sut = new RegisterUserUseCase(repo);
  });

  it("should has user password upon register", async () => {
    const inputUser = {
      email: "johndoe@email.com",
      name: "John Doe",
      password_hash: "12345678",
      created_at: new Date(),
    };
    const {user} = await sut.execute(inputUser);
    const isPasswordHashed = await compare(inputUser.password_hash, user.password_hash);
    expect(isPasswordHashed).toBe(true);
    });


    it("should not register user with same email", async () => {
        const inputUser = {
            email: "johndoe@email.com",
            name: "John Doe",
            password_hash: "12345678",
            created_at: new Date(),
        };
      
        await sut.execute(inputUser);
        await expect(sut.execute(inputUser)).rejects.toBeInstanceOf(InvalidCredentialsError);
      
        
    });


    it("should register user", async () => {
        const inputUser = {
            email: "johndoe@email.com",
            name: "John Doe",
            password_hash: "12345678",
            created_at: new Date(),
        };

        const {user} = await sut.execute(inputUser);
        expect(user.id).toEqual(expect.any(String));
    });
});


