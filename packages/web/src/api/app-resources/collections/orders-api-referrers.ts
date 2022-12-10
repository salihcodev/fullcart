// utils:
import APIHandler from '../../base';

// >>> GET, fetching all data::
// may gonna pass other options to consume some different data.
export const fetchAllOrders = (options?: any) => APIHandler.get(`/order/s${options || ``}`);

// >>> POST, create new order::
export const createNewOrder = (itemToAdd: object) => APIHandler.post(`/order/new`, itemToAdd);

// >>> DELETE, delete a specific order::
export const deleteAnOrder = (id: string | undefined) => APIHandler.delete(`/order/${id}`);
