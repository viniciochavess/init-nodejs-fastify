import { InvalidCredentialsError } from "@/error/Invalid-credentials-error";
import { AuthenticateUserMake } from "@/make/AuthenticateUserMake";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function authenticateUserController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const schemaBody = z.object({
    email: z.string().email(),
    password_hash: z.string().min(4),
  });

  const { email, password_hash } = schemaBody.parse(req.body);

  try {
    const registerUserUseCase = await AuthenticateUserMake();
    const user = await registerUserUseCase.execute({
      email,
      password: password_hash,
    });
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(409).send(error.message);
    }

    reply.send().status(500);
  }

  reply.send().status(200);
}
