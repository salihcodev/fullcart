// utils:
import APIHandler from '../../base';

// >>> GET, fetching all data:
// may gonna pass other options to consume some different data.
export const fetchAllCategoriesComputed = () => APIHandler.get(`/category/computed`);
export const fetchAllCategories = (category: string, options?: any) => APIHandler.get(`/${category}${options || ``}`);
export const fetchCategoryById = (category: string, id: any) => APIHandler.get(`/${category}/${id}`);

// >>> POST, create new cart item::
export const createNewCategory = (category: string, catToAdd: object) => APIHandler.post(`/${category}/new`, catToAdd);

// >>> DELETE, delete a specific cart item::
export const deleteCategory = (category: string, id: string) => APIHandler.delete(`/${category}/${id}`);
