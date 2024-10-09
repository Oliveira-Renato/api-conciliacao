import pedidosYampiRepository from "../repositories/pedidosYampRepository";

const getAll = async () => {  // Removido 'queryParams', já que não são necessários
  return await pedidosYampiRepository.findAll();
};

export default { getAll };  // Certifique-se de que o 'getAll' está sendo exportado corretamente
