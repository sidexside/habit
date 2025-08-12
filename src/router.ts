import type { FastifyInstance } from "fastify";
import ky from "ky";
import { authMiddleware } from "./auth.ts";

export default async function routes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  app.get("/ip", async (_, reply) => {
    const ip = (await ky.get("http://checkip.amazonaws.com").text()).trim();
    reply.status(200).send({ ip });
  });
}
