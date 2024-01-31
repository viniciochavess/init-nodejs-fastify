export interface ICheckins {
  id?: string;
  user_id: string;
  gym_id: string;
  validate_at?: Date;
}

export interface ICheckinsRepository {
  create({ gym_id,user_id }: ICheckins): Promise<ICheckins>;
}
