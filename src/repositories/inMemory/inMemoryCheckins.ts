import { randomUUID } from "crypto";
import { ICheckins, ICheckinsRepository } from "../interface/ICheckinsRepository";

export class inMemoryCheckins implements ICheckinsRepository {
    public items: ICheckins[] = [];

   async create({ gym_id, user_id,validate_at }: ICheckins): Promise<ICheckins> {
        const checkin = {id:randomUUID(), gym_id, user_id, validated_at: new Date()};
        await this.items.push(checkin);
        return checkin;
    }
}