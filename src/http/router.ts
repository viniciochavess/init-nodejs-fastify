import { FastifyInstance } from "fastify";
import { RegisterController } from "./controller/RegisterUserController";
import { authenticateUserController } from "./controller/AuthenticateUserController";

export async function routerUser(app: FastifyInstance) {
  app.post("/register", RegisterController);
  app.post("/session", authenticateUserController);
}
