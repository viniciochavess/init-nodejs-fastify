import {expect,describe,beforeEach,it} from 'vitest'
import {IRepositoryUser} from '@/repositories/interface/IRepositoryUser'
import { AuthenticateUserUseCase } from './authenticate';
import { InMemoryUserRepository } from '@/repositories/inMemory/inMemoryUser';
import {hash,compare} from 'bcryptjs'
import { InvalidCredentialsError } from '@/error/Invalid-credentials-error';


let repo:IRepositoryUser;
let sut:AuthenticateUserUseCase;


describe('AuthenticateUserUseCase',async ()=>{
    beforeEach(()=>{
        repo = new InMemoryUserRepository();
        sut = new AuthenticateUserUseCase(repo);
    })

    it('should authenticate user',async ()=>{
       const userCreate = await repo.create({
        email:"johndoe@email.com",
        name:"John Doe",
        password_hash:await hash('12345678',6), 
       })
      
       let comparePassword = await compare('12345678',userCreate.password_hash)
       console.log(comparePassword)
  
    
      const {user} = await sut.execute({email:userCreate.email,password:'12345678'})

      expect(user.id).toEqual(expect.any(String))
     
  
    
    
    })


    it('should not authenticate user with wrong password',async ()=>{

        const userCreate = await repo.create({
            email:"johndoe@email.com",
            name:"John Doe",
            password_hash:await hash('12345678',6), 
           })

        expect(sut.execute({email:userCreate.email,password:'123456789'})).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

    it('should not authenticate user with wrong email',async ()=>{

        const userCreate = await repo.create({
            email:"johndoe@email.com",
            name:"John Doe",
            password_hash:await hash('12345678',6), 
           })

        expect(sut.execute({email:'wrongemail',password:'12345678'})).rejects.toBeInstanceOf(InvalidCredentialsError)

    })




});