// utils:
import APIHandler from '../../base';

// >>> GET, fetching all data:
// may gonna pass other options to consume some different data.
export const fetchAllCartItems = (options?: any) => APIHandler.get(`/cart${options || ``}`);

// >>> POST, create new cart item::
export const createNewCartItem = (itemToAdd: object) => APIHandler.post(`/cart/new`, itemToAdd);

// >>> DELETE, delete a specific cart item::
export const deleteCartItem = (id: string | undefined) => APIHandler.delete(`/cart/${id}`);
