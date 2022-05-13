import { ProdTypes } from '../../../../common/@types/prod.types';

export const categorizeSubCategories = (prods: ProdTypes[]): object => {
  const data: any = {};

  // 1:: get sub-cats to use it as a keys.
  const subCategoriesKeys = prods.map(({ subCategory }: ProdTypes): string => {
    return subCategory;
  });

  // 2:: adding keys to the data-source obj with given <subCategoriesKeys>.
  for (let i in subCategoriesKeys) {
    if (data[subCategoriesKeys[i]] !== subCategoriesKeys[i]) {
      data[subCategoriesKeys[i]] = [];
    }
  }

  // 3:: match & add cats.
  prods.map((prod: ProdTypes): void => {
    data[prod.subCategory].push(prod);
  });

  return data;
};
