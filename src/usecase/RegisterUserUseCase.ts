import {hash} from 'bcryptjs'
import { InvalidCredentialsError } from "../error/Invalid-credentials-error";
import { IRepositoryUser, IUser } from "../repositories/interface/IRepositoryUser";

export class RegisterUserUseCase{
    constructor(private repo:IRepositoryUser){}

    async execute({email,name,password_hash}:IUser){
        const findByEmail = await this.repo.findByEmail(email)
        if(findByEmail){
             return new InvalidCredentialsError()
        }
        const password = await hash (password_hash,6)
        const user = await this.repo.create({email,name,password_hash:password})

        return {user}
    }
}