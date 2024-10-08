import { Request, Response } from "express";
import redeService from "../services/redeService";

const getRedeTransactions = async (req: Request, res: Response) => {
  try {
    // Extraia os parâmetros da query (ou body, se preferir)
    const {
      period,
      pageSize,
      startDate,
      endDate,
      startTime,
      endTime,
      orderByName,
      orderByDirection,
      orderId,
    } = req.query;

    const transactions = await redeService.getRedeTransactions(
      period as string,
      pageSize as string,
      startDate as string,
      endDate as string,
      startTime as string,
      endTime as string,
      orderByName as string,
      orderByDirection as string,
      orderId as string
    );

    if (!transactions) {
      return res.status(404).json({ message: "Transações não encontradas" });
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    res.status(500).json({ message: "Erro ao buscar transações" });
  }
};

export default { getRedeTransactions };
