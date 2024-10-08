import { Request, Response } from "express";
import redeService from "../services/redeService";

const getRedeTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await redeService.getRedeTransactions();
    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar transações" });
  }
};

export default { getRedeTransactions };
