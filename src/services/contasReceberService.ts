import contasReceberRepository from "../repositories/contasReceberRepository";
import { QueryParams } from "../types";

const getAll = async (queryParams: QueryParams) => {    
  return await contasReceberRepository.findAll(queryParams);
};

export default { getAll };
