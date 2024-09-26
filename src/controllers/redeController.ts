import { Request, Response } from "express";
import redeService from "../services/redeService";

const getRedeTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await redeService.getRedeTransactions();
    res.status(200).json(transactions);

  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
  }
};

export default { getRedeTransactions };
