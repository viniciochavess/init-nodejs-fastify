import { FastifyInstance } from "fastify";
import { RegisterController } from "./controller/RegisterUserController";
import { authenticateUserController } from "./controller/AuthenticateUserController";
import { GetUserProfileController } from "./controller/GetUserProfileController";

export async function routerUser(app: FastifyInstance) {
  app.post("/register", RegisterController);
  app.post("/sessions", authenticateUserController);
  app.get("/:id", GetUserProfileController)
}
