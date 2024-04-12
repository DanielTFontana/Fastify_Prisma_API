import { error } from "console";
import prismaClient from "../prisma";

interface DeleteCustumerProps {
  id: string;
}

export class DeleteCustumerterService {
  async execute({ id }: DeleteCustumerProps) {
    if (!id) {
      throw new Error("Solicitação Inválida");
    }

    const findCustumer = await prismaClient.custumer.findFirst({
      where: {
        id: id,
      },
    });
    if (!findCustumer) {
      throw new Error("Usuário não encontrado");
    }

    await prismaClient.custumer.delete({
      where: {
        id: findCustumer.id,
      },
    });
  }

 
}
