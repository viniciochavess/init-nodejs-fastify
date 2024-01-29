import { PrismaUserRepository } from "@/repositories/prisma/UserRepository";
import { GetUserProfile } from "@/usecase/get-user-profile";

export function GetUserProfileMake() {
  const repo = new PrismaUserRepository();
  const make = new GetUserProfile(repo);
  return make;
}
