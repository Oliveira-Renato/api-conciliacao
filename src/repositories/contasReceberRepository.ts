import axios from "axios";
import xml2js from "xml2js";
import { QueryParams } from "../types";

const findAll = async (queryParams: QueryParams) => {
  const token = process.env.TINY_API_TOKEN;
  const url = `https://api.tiny.com.br/api2/contas.receber.pesquisa.php?token=${token}&format=json`;

  // Incluindo os parâmetros necessários
  const params = new URLSearchParams();

  if (queryParams.nome_cliente)
    params.append("nome_cliente", queryParams.nome_cliente);
  if (queryParams.numero_doc)
    params.append("numero_doc", queryParams.numero_doc);
  if (queryParams.numero_banco)
    params.append("numero_banco", queryParams.numero_banco);
  if (queryParams.data_ini_emissao)
    params.append("data_ini_emissao", queryParams.data_ini_emissao);
  if (queryParams.data_fim_emissao)
    params.append("data_fim_emissao", queryParams.data_fim_emissao);
  if (queryParams.data_ini_vencimento)
    params.append("data_ini_vencimento", queryParams.data_ini_vencimento);
  if (queryParams.data_fim_vencimento)
    params.append("data_fim_vencimento", queryParams.data_fim_vencimento);
  if (queryParams.situacao) params.append("situacao", queryParams.situacao);
  if (queryParams.id_origem) params.append("id_origem", queryParams.id_origem);

  try {
    const response = await axios.get(`${url}&${params.toString()}`);
    // Converte XML para JSON
    const json = await xml2js.parseStringPromise(response.data, {
      mergeAttrs: true,
    });

    if (!json.retorno) {
      throw new Error("Nenhuma conta encontrada.");
    }

    const { contas } = json.retorno;

    return contas;
  } catch (error) {
    throw new Error("Erro ao buscar dados da API da Tiny");
  }
};

export default { findAll };
