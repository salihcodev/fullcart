// utils:
import APIHandler from '../../base';

// >>>> GET, fetching all data:
// may gonna pass other options to consume some different data.
export const fetchAllProds = (category: string, options?: object) =>
  APIHandler.get(`/categories/${category}/all${options}`);

// >>>> POST, create new product::
export const createNewProd = (category: string, prodToCreate: object) =>
  APIHandler.post(`/categories/${category}/new`, prodToCreate);

// >>>> DELETE, delete a specific product::
export const deleteProd = (category: string, id: string) =>
  APIHandler.delete(`/categories/${category}/${id}`);

// >>>> UPDATE, update a specific product::
export const updateProd = (category: string, id: string, prodToUpdate: object) =>
  APIHandler.patch(`/categories/${category}/${id}`, prodToUpdate);

// >>>> GET, get product with its `id`::
export const getSingleProd = (category: string, id: string) =>
  APIHandler.get(`/categories/${category}/s/${id}`);
