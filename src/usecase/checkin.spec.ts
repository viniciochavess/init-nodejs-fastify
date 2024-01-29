import { ICheckinsRepository } from "@/repositories/interface/ICheckinsRepository";
import { describe, expect, beforeEach, it } from "vitest";
import { CheckinUseCase } from "./checkinUseCase";
import { CheckinsRepository } from "@/repositories/prisma/CheckinsRepository";
import { inMemoryCheckins } from "@/repositories/inMemory/inMemoryCheckins";

let repo: ICheckinsRepository;
let sut: inMemoryCheckins;

describe("checkin", () => {
  beforeEach(() => {
    repo = new CheckinsRepository();
    sut = new inMemoryCheckins();
  });

  it("should create a checkin", async () => {
    const checkin = await sut.create({ gym_id: "1", user_id: "1" });
    expect(checkin.id).toEqual(expect.any(String));
  });
});
