import axios from "axios";
import dotenv from "dotenv";
import xml2js from "xml2js";
import { TransactionDetailReportResponse } from "../types";

dotenv.config();

// Configuração das credenciais da Rede (carregar do .env)
const baseURL = process.env.REDE_BASE_URL || "https://app.userede.com.br";
const merchantID = process.env.REDE_MERCHANT_ID || "";
const merchantKEY = process.env.REDE_MERCHANT_KEY || "";

// Função para realizar uma requisição para API da rede
async function fetchRedeTransactions(
  period: string,
  pageSize: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  orderByName: string,
  orderByDirection: string,
  orderId: string
): Promise<TransactionDetailReportResponse | null> {
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
              <filterOptions>
                  <orderId>${orderId}</orderId>
                  <period>${period}</period>
                  <pageSize>${pageSize}</pageSize>
                  <startDate>${startDate}</startDate>
                  <endDate>${endDate}</endDate>
                  <startTime>${startTime}</startTime>
                  <endTime>${endTime}</endTime>
                  <orderByName>${orderByName}</orderByName>
                  <orderByDirection>${orderByDirection}</orderByDirection>
              </filterOptions>
          </request>
      </rapi-request>
    `;

    const response = await axios.post(`${baseURL}`, xmlRequest);
    const json: TransactionDetailReportResponse =
      await xml2js.parseStringPromise(response.data, { mergeAttrs: true });

    return json;
    
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    throw new Error("Erro ao buscar transações da Rede");
  }
}

export default { fetchRedeTransactions };
