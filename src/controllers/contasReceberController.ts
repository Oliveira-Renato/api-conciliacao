import { Request, Response } from "express";
import contasReceberService from "../services/contasReceberService";

// Definindo a interface para os parâmetros esperados
interface QueryParams {
  nome_cliente?: string;
  numero_doc?: string;
  numero_banco?: string;
  data_ini_emissao?: string;
  data_fim_emissao?: string;
  data_ini_vencimento?: string;
  data_fim_vencimento?: string;
  situacao?: string;
  id_origem?: string;
}

const getContasReceber = async (req: Request, res: Response) => {
  try {
    const contas = await contasReceberService.getAll(req.query);
    res.status(200).json(contas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar constas a receber" });
  }
};

export default { getContasReceber };
