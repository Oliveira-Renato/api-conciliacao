import redeRepository from "../repositories/redeRepository";

const getRedeTransactions = async (
  period: string,
  pageSize: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  orderByName: string,
  orderByDirection: string,
  orderId: string
) => {
  try {
    return await redeRepository.fetchRedeTransactions(
      period,
      pageSize,
      startDate,
      endDate,
      startTime,
      endTime,
      orderByName,
      orderByDirection,
      orderId
    );
  } catch (error) {
    console.error("Erro ao buscar transações: ", error);
    throw new Error("Erro ao buscar transações no serviço");
  }
};

export default { getRedeTransactions };
