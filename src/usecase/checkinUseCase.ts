import { ICheckinsRepository } from "@/repositories/interface/ICheckinsRepository";

interface IRequest {
  gym_id: string;
  user_id: string;
}

export class CheckinUseCase {
  constructor(private repo: ICheckinsRepository) {}
  async execute({ gym_id, user_id }: IRequest) {
    const checkin = await this.repo.create({
      gym_id,
      user_id,
    });
  }
}
