import { ICheckinsRepository } from "@/repositories/interface/ICheckinsRepository";
import { describe, expect, beforeEach, it ,vi, afterEach } from "vitest";
import { CheckinsRepository } from "@/repositories/prisma/CheckinsRepository";
import { inMemoryCheckins } from "@/repositories/inMemory/inMemoryCheckins";

let repo: ICheckinsRepository;
let sut: inMemoryCheckins;
let fakeDateTime: Date;

describe("checkin", () => {
  beforeEach(() => {
    repo = new CheckinsRepository();
    sut = new inMemoryCheckins();
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useFakeTimers();
  });

  it("should create a checkin", async () => {
    const checkin = await sut.create({ gym_id: "1", user_id: "1" });
    expect(checkin.id).toEqual(expect.any(String));
    vi.setSystemTime(new Date("2022,0,20,8,0,0"));
    console.log(checkin)
  });

  it("should not be able to check in twice in the same day", async () => {
    await sut.create({ gym_id: "1", user_id: "1" });
    await expect(async()=>{
    await sut.create({ gym_id: "1", user_id: "1" });
    }).rejects.toBeInstanceOf(Error);
  });
});
