import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustumersService } from "../service/listCustumersService";

export class ListCustumersController {
    async handle(request: FastifyRequest, replay:FastifyReply){
        const listCustumerService = new ListCustumersService()

        const custumer =  await listCustumerService.execute()

        replay.send(custumer)
    }

}