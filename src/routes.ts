import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "./controllers/createCostumerController";
import { ListCustumersController } from "./controllers/listCustumersController";

export async function routes(fastify: FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/custumer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreateCostumerController().handle(request, replay)
    })

    fastify.get("/custumers", async (request: FastifyRequest, replay: FastifyReply) => {
        return new ListCustumersController().handle(request, replay)
    })

    fastify.delete("/custumer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new ListCustumersController().handle(request, replay)
    })
}