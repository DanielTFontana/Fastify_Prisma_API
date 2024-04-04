import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCostumerController } from "./controllers/createCostumerController";

export async function routes(fastify: FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/custumer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreateCostumerController().handle(request, replay)
    })
}