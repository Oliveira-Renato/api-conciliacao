import { Request, Response } from "express";
import pedidosYampiService from "../services/pedidosYampiService";

const getPedidos = async (req: Request, res: Response) => {
  try {
    const pedidos = await pedidosYampiService.getAll();  // Certifique-se de que 'getAll' não recebe parâmetros
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pedidos da API da Yampi" });
  }
};

export default { getPedidos };  // Verifique se você está exportando corretamente
