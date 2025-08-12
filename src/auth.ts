import type { FastifyRequest, FastifyReply } from "fastify";
export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  const key = req.headers["authorization"];
  if (key !== process.env.AUTH_KEY) {
    reply.status(401).send({ message: "Unauthorized" });
  }
}
