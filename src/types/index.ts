// Definindo a interface para os parâmetros esperados
export interface QueryParams {
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

interface RapiResponse {
  header: Header[];
  result: Result[];
}

interface Header {
  errorCode: string[];
  errorMsg: string[];
  command: string[];
  time: string[];
}

interface Result {
  resultSetInfo: ResultSetInfo[];
  records: Record[];
}

interface ResultSetInfo {
  totalNumberOfRecords: string[];
  pageNumber: string[];
}

interface Record {
  record: TransactionRecord[]; // array de TransactionRecord
}

interface TransactionRecord {
  transactionId: string[];
  transactionAmount: string[];
  transactionDate: string[];
  billingName: string[];
  billingEmail: string[];
  paymentType: string[];
  transactionStatus: string[];
}

// Tipo principal para o retorno da API
export interface ApiResponse {
  "rapi-response": RapiResponse;
}
