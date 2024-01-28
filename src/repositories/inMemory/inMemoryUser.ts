import { hash } from "bcryptjs";
import { IRepositoryUser, IUser } from "../interface/IRepositoryUser";
import { randomUUID } from "crypto";

export class InMemoryUserRepository implements IRepositoryUser {
  public users: IUser[] = [];

  async create({ email, name, password_hash }: IUser): Promise<IUser> {
    const user = {
      id: randomUUID(),
      email,
      name,
      password_hash,
    };
    this.users.push(user);
    return user;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      return null;
    }
    return user;
  }
  async findById(id: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
  async listUsers(): Promise<IUser[] | null> {
    if (!this.users) {
      return null;
    }
    return this.users;
  }
}
