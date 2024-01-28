import { UserNotFoundError } from "@/error/user-not-found";
import { IRepositoryUser, IUser } from "@/repositories/interface/IRepositoryUser";
import { P } from "vitest/dist/reporters-1evA5lom";




interface IResponse{
   user:IUser
}
export class GetUserProfile {
  constructor(private repo: IRepositoryUser) {}

  async execute(id: string):Promise<IResponse> {
    const user = await this.repo.findById(id);
    if (!user) {
      throw new UserNotFoundError();
    }
    return {user};
  }
}
