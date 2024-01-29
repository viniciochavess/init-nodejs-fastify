import { prisma } from "@/lib/database/prisma";
import { ICheckins, ICheckinsRepository } from "../interface/ICheckinsRepository";

export class CheckinsRepository implements ICheckinsRepository {
    async create({ gym_id,user_id }: ICheckins): Promise<ICheckins> {
        const checkin = await prisma.checkins.create({data:{ gym_id,user_id}});
        return checkin;
    }
    
}