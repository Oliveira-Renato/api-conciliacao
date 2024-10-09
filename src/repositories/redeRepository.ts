import axios from "axios";
import dotenv from "dotenv";
import xml2js from "xml2js";
import { ApiResponse } from "../types";

dotenv.config();

// Configuração das credenciais da Rede (carregar do .env)
const baseURL = process.env.REDE_BASE_URL || "https://app.userede.com.br";
const merchantID = process.env.REDE_MERCHANT_ID || "";
const merchantKEY = process.env.REDE_MERCHANT_KEY || "";

interface ResponseRedeFormated {
  transactionId:string
  transactionAmount:string
  transactionDate:string
  billingName:string
  billingEmail:string
  paymentType:string
  transactionStatus:string
}

// Função para realizar uma requisição para API da rede
async function fetchRedeTransactions(
  transactionId: string
): Promise<ResponseRedeFormated[]>  {
  try {
    // Corpo da requisição com o XML
    const xmlRequest =`
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
      </rapi-request>`
    ;

    const response = await axios.post(`${baseURL}`, xmlRequest);
    const json: ApiResponse =
      await xml2js.parseStringPromise(response.data, { mergeAttrs: true });
    
    // Verificando se existe a propriedade 'records' com o array 'record'
    const results = json?.["rapi-response"]?.result;
    if (!results || results.length === 0) {
      throw new Error("Nenhuma transação encontrada");
    }

    const records = results.flatMap((result) => result.records); // Usando flatMap para obter todos os records em um único array

    if (!records.length || !records[0]?.record) {
      throw new Error("Nenhuma transação encontrada");
    }

    // formatando os filtros
    const formattedResponse: ResponseRedeFormated[] = records.map((record) => {
      return record.record.map((transaction) => ({
        transactionId: transaction.transactionId[0], // Aqui já garantimos que é um array
        transactionAmount: transaction.transactionAmount[0],
        transactionDate: transaction.transactionDate[0],
        billingName: transaction.billingName[0],
        billingEmail: transaction.billingEmail[0],
        paymentType: transaction.paymentType[0],
        transactionStatus: transaction.transactionStatus[0],
      }));
    }).flat(); // Usando flat() para achatar o array de arrays

    return formattedResponse;
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    throw new Error("Erro ao buscar transações da Rede");
  }
}

export default { fetchRedeTransactions };