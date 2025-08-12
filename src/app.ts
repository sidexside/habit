import Fastify from "fastify";
import logger from "./logger.ts";
import routes from "./router.ts";

const app = Fastify({
  logger,
});

app.get("/health", async (_, reply) => {
  reply.status(200).send({ message: "ok" });
});

app.register(routes);

app.listen({ port: Number(process.env.PORT!) });
