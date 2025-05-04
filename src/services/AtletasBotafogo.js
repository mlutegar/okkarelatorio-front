import { handleError, handleResponse } from "./ServiceUtils";
import API_BASE_URL from "../../config";

const getAll = async () => {
  const response = await (fetch(`${API_BASE_URL}/all`).catch(handleError));

  return await handleResponse(response);  
}

const getElenco = async (elenco = 'masculino') => {
  const response = await (fetch(`${url}/${elenco}`).catch(handleError));

  return await handleResponse(response);
}

const getAtleta = async (atleta) => {
  const response = await (fetch(`${url}/${atleta}`).catch(handleError));
  
  return await handleResponse(response);
}


export { getAll, getElenco, getAtleta };