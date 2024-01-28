import { IRepositoryUser } from '@/repositories/interface/IRepositoryUser';
import {expect, it, beforeEach, describe} from 'vitest'
import { GetUserProfile } from './get-user-profile';
import { InMemoryUserRepository } from '@/repositories/inMemory/inMemoryUser';
import { UserNotFoundError } from '@/error/user-not-found';

let repo:IRepositoryUser;
let sut:GetUserProfile;

describe('GetUserProfile', () => {
    beforeEach(() => {
        repo = new InMemoryUserRepository();
        sut = new GetUserProfile(repo);
    })

    it('should return user', async () => {
        const user = {
            username:"JohnDoe",
            name:'John Doe',
            email:'johndoe@email.com',
            password_hash:'123456'
        }
       const result = await repo.create(user);
       if(result.id){
           const response = await sut.execute(result.id);
           console.log(response)
           expect(response.user.id).toEqual(expect.any(String));
        }

    })

    it('should throw error if user not found', async () => {
        await expect(sut.execute('123')).rejects.toBeInstanceOf(UserNotFoundError)
    })
                   
})