import { InvalidCredentialsError } from "@/error/Invalid-credentials-error";
import { IRepositoryUser } from "@/repositories/interface/IRepositoryUser";
import { compare } from "bcryptjs";

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(private repo: IRepositoryUser) {}
  async execute({ email, password }: IRequest) {
    console.log(email)
    const user = await this.repo.findByEmail(email);
    if (!user) {
      throw new InvalidCredentialsError;
    }
    const passwordMatch = await compare(password, user.password_hash);
    if (!passwordMatch) {
      throw new InvalidCredentialsError;
    }

    return { user };
  }
}
