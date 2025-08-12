import type { FastifyInstance } from "fastify";
import { authMiddleware } from "./auth.ts";

export default async function routes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  app.get("/auth", async (_, reply) => {
    reply.status(200).send({ message: "Authorized" });
  });
}
