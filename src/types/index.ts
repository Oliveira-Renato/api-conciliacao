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

export interface TransactionDetailReportResponse {
  "rapi-response": {
    header: {
      errorCode: string[];
      errorMsg: string[];
      command: string[];
      time: string[];
    };
    result: {
      resultSetInfo: {
        totalNumberOfRecords: string;
        pageToken: string;
        pageNumber: string;
        numberOfPages: string;
      };
      records: {
        record: {
          transactionId: string;
          referenceNumber: string;
          transactionType: string;
          transactionAmount: string;
          shippingAmount: string[];
          transactionDate: string[];
          orderId: string[];
          splitPaymentOrderId: string[];
          userId: string[];
          customerId: string[];
          companyName: string[];
          responseCode: string[];
          approvalCode: string[];
          paymentType: string[];
          bankRoutingNumber: string[];
          achAccountNumber: string[];
          avsResponseCode: string[];
          billingName: string[];
          billingAddress1: string[];
          billingAddress2: string[];
          billingCity: string[];
          billingState: string[];
          billingCountry: string[];
          billingZip: string[];
          billingPhone: string[];
          billingEmail: string[];
          comments: string[];
          transactionStatus: string[];
          transactionState: string[];
          recurringPaymentFlag: string[];
          processorReturnedData: string[];
          gatewayDebitNetworkID: string[];
          creditCardType: string[];
          boletoUrl: string[];
          boletoNumber: string[];
          expirationDate: string[];
          processorID: string[];
          dateOfPayment: string[];
          dateOfFunding: string[];
          bankOfPayment: string[];
          branchOfPayment: string[];
          paidAmount: string[];
          bankFee: string[];
          netAmount: string[];
          returnCode: string[];
          clearingCode: string[];
          customField1: string[];
          customField2: string[];
          customField3: string[];
          customField4: string[];
          customField5: string[];
          numberOfInstallments: string[];
          chargeInterest: string[];
          processorTransactionID: string[];
          processorReferenceNumber: string[];
          brandCode: string[];
          brandMessage: string[];
          brandTransactionID: string[];
          brandMac: string[];
        }[];
      };
    };
  };
}
