import redeRepository from "../repositories/redeRepository";

const getRedeTransactions = async (transactionId: string) => {
  try {
    return await redeRepository.fetchRedeTransactions(transactionId);
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    throw new Error("Erro ao buscar transações no serviço");
  }
};

export default { getRedeTransactions };
