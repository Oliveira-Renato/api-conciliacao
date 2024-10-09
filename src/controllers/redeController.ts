import { Request, Response } from "express";
import redeService from "../services/redeService";

const getRedeTransactions = async (req: Request, res: Response) => {
  try {
    // Extrair os parâmetros da query (ou body)
    const { transactionId } = req.query;

    if (!transactionId) {
      return res.status(400).json({ error: "ID de transação é obrigatório!" });
    }

    const transactions = await redeService.getRedeTransactions(transactionId as string);

    res.status(200).json(transactions); 
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    res.status(500).json({ message: "Erro ao buscar transações" });
  }
};

export default { getRedeTransactions };
