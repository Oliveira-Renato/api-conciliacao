import axios from "axios";

const findAll = async () => {
  const userToken = process.env.USER_TOKEN;
  const userSecretKey = process.env.USER_SECRET_KEY;
  const url = `https://api.dooki.com.br/v2/${process.env.YAMPI_ALIAS}/orders`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-token": userToken,
        "User-secret-key": userSecretKey,
        "Content-Type": "application/json",
      },
    });

    const allOrders = response.data.data; // Obtendo todos os pedidos
    let transaction = {}
    // Filtrando pedidos com status de pagamento aprovado e que não são do tipo Pix ou Boleto
    const filteredOrders = allOrders.filter((order: any) => {
      order.transactions?.data.forEach((item: any) => {
        // Verificando se o método de pagamento não é Pix ou Boleto
        // console.log(item)
        if(item.id == 142836313) {
          transaction = item
        }
      });
    
    });

    return transaction; // Retorna apenas os pedidos filtrados
  } catch (error: any) {
    console.error("Erro ao buscar pedidos da API da Yampi:", error.response?.data || error.message);
    throw new Error("Erro ao buscar pedidos da API da Yampi");
  }
};

export default { findAll };
