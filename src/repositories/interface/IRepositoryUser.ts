export interface IUser{
    id?:string,
    name:string,
    email:string,
    password_hash:string,
}

export interface IRepositoryUser {
     create({email,name,password_hash}:IUser):Promise <IUser>
     findByEmail(email:string):Promise<IUser | null>
     findById(id:string):Promise<IUser | null>
     listUsers():Promise<IUser[] | null>
}