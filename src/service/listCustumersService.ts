import prismaClient from "../prisma";

export class ListCustumersService  {
    async execute () {
        const custumers = await prismaClient.custumer.findMany()

        return custumers
    }
}