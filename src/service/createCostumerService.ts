import prismaClient from "../prisma";

interface CreateCostumerControllerPorps{
    name:string,
    email:string
}

export class CreateCostumerService{
    async execute({name, email}: CreateCostumerControllerPorps){

        if(!name || !email){
            throw new Error ("campo name ou email vazios")
        }

    const custumer = await prismaClient.custumer.create({
        data:{
            name,
            email,
            status:true,
        }
    })

        return custumer
    }
}