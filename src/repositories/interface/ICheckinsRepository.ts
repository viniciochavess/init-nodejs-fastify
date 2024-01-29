export interface ICheckins {
  id?: string;
  user_id: string;
  gym_id: string;
}

export interface ICheckinsRepository {
  create({ gym_id,user_id }: ICheckins): Promise<ICheckins>;
}
