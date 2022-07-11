// utils:
import APIHandler from '../../base';

// >>> GET, fetching all data:
// may gonna pass other options to consume some different data.
export const fetchAllWishlistItems = (options?: any) => APIHandler.get(`/wishlist${options || ``}`);

// >>> POST, create new wishlist item::
export const createNewWishlistItem = (itemToAdd: object) => APIHandler.post(`/wishlist/new`, itemToAdd);

// >>> DELETE, delete a specific wishlist item::
export const deleteWishlistItem = (id: string | undefined) => APIHandler.delete(`/wishlist/${id}`);
