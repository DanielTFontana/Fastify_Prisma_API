import { CreateCostumerService } from "../service/createCostumerService";
import { FastifyRequest, FastifyReply } from "fastify";

export class CreateCostumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {name,email} = request.body as {name:string, email:string}

        const custumerService = new CreateCostumerService()

        const custumer = await custumerService.execute({name, email}) //vai executar o service que vai se cominucar com o banco e armazenar a resposta nessa variável.

        reply.send(custumer) //depois vamos passar a resposta do serviço para API passando o custumer no send.
    }
}