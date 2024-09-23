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