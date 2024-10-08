import redeRepository from "../repositories/redeRepository";

const getRedeTransactions = async () => {
  try {
    return await redeRepository.fetchRedeTransactions();
  } catch (error) {
    throw new Error("Erro ao buscar transações");
  }
};

export default { getRedeTransactions };
