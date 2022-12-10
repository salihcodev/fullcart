// utils:
import APIHandler from '../../base';

// >>> GET, fetching all data:
// may gonna pass other options to consume some different data.
export const fetchAllProds = (options?: any) => APIHandler.get(`/products${options || ``}`);
export const fetchAllProdsCount = (options?: any) => APIHandler.get(`/products/count${options || ``}`);

// >>> POST, create new product::
export const createNewProd = (category: string, prodToCreate: object) => APIHandler.post(`/products/new`, prodToCreate);

// >>> DELETE, delete a specific product::
export const deleteProd = (category: string, id: string) => APIHandler.delete(`/products/${id}`);

// >>> UPDATE, update a specific product::
export const updateProd = (category: string, id: string, prodToUpdate: object) => APIHandler.patch(`/products/${id}`, prodToUpdate);

// >>> GET, get product with its `id` or `slug::
export const fetchSingleProd = (valueToFetchWith: string) => APIHandler.get(`/products/s/${valueToFetchWith}`);
