import { Request, Response } from "express";
import contasReceberService from "../services/contasReceberService";

const getContasReceber = async (req: Request, res: Response) => {
  try {
    const contas = await contasReceberService.getAll(req.query);
    res.status(200).json(contas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar constas a receber" });
  }
};

export default { getContasReceber };
