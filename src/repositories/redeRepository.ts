import axios from "axios";
import dotenv from "dotenv";
import xml2js from "xml2js";
import { ApiResponse } from "../types";

dotenv.config();

// Configuração das credenciais da Rede (carregar do .env)
const baseURL = process.env.REDE_BASE_URL || "https://app.userede.com.br";
const merchantID = process.env.REDE_MERCHANT_ID;
const merchantKEY = process.env.REDE_MERCHANT_KEY;

if (!merchantID || !merchantKEY) {
  throw new Error("Credenciais da Rede não configuradas corretamente.");
}

interface ResponseRedeFormated {
  transactionId: string;
  transactionAmount: string;
  transactionDate: string;
  billingName: string;
  billingEmail: string;
  paymentType: string;
  transactionStatus: string;
}

// Função para realizar uma requisição para API da Rede
async function fetchRedeTransactions(transactionId: string): Promise<ResponseRedeFormated[]> {
  try {
    // Corpo da requisição com o XML
    const xmlRequest = `
      <rapi-request>
        <verification>
          <merchantId>${merchantID}</merchantId>
          <merchantKey>${merchantKEY}</merchantKey>
        </verification>
        <command>transactionDetailReport</command>
        <request>
          <period>today</period>
          <filterOptions>
            <transactionId>${transactionId}</transactionId>
          </filterOptions>
        </request>
      </rapi-request>
    `;

    // Configurando headers e fazendo a requisição
    const response = await axios.post(baseURL, xmlRequest, {
      headers: { "Content-Type": "application/xml" },
    });

    // Parsing do XML para JSON
    const json: ApiResponse = await xml2js.parseStringPromise(response.data, { mergeAttrs: true });

    const results = json?.["rapi-response"]?.result;
    if (!results || !results.length) {
      throw new Error("Nenhuma transação encontrada.");
    }

    const records = results.flatMap((result) => result.records?.flatMap((r) => r.record) || []);
    if (!records.length) {
      throw new Error("Nenhuma transação encontrada.");
    }

    // Formatando o retorno
    const formattedResponse: ResponseRedeFormated[] = records.map((transaction) => ({
      transactionId: transaction.transactionId[0],
      transactionAmount: transaction.transactionAmount[0],
      transactionDate: transaction.transactionDate[0],
      billingName: transaction.billingName[0],
      billingEmail: transaction.billingEmail[0],
      paymentType: transaction.paymentType[0],
      transactionStatus: transaction.transactionStatus[0],
    }));

    return formattedResponse;
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    throw new Error("Erro ao buscar transações da Rede.");
  }
}

export default { fetchRedeTransactions };
