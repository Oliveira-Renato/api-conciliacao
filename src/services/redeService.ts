import redeRepository from "../repositories/redeRepository";

const getRedeTransactions = async () => {
  try {
    return await redeRepository.fetchRedeTransactions();
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
  }
};

export default { getRedeTransactions };
