import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustumerterService } from "../service/deleteCustumerService";

class DeleteCustumerterController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        const {id} = request.query as {id: string}
        const custumerService = new DeleteCustumerterService()

        const custumer = await custumerService.execute({id})

        reply.send(custumer)
    }
}