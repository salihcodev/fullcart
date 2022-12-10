// util:
import { createSlice } from '@reduxjs/toolkit';
import { addNewCategory } from './logic/add.logic';
import { deleteCategory, deleteSubCategory } from './logic/delete.logic';
import { getAllMainCategories, getAllCategoriesComputed, getAllSubCategories, getCategoryById, getSubCategoryById } from './logic/read.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  computedCats: [],
  categories: [],
  subCategories: [],
  singleCategory: {},
  creationResult: {},
  stage: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const CategoriesSlice = createSlice({
  name: `CategoriesSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      // CREAT:
      .addCase(addNewCategory.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(addNewCategory.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.creationResult = data;

        state.stage = `idle`;
      })
      .addCase(addNewCategory.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // READ:
      // All computed
      .addCase(getAllCategoriesComputed.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllCategoriesComputed.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.computedCats = data;

        state.stage = `idle`;
      })
      .addCase(getAllCategoriesComputed.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // All categories
      // .addCase(getAllMainCategories.pending, (state) => {
      //   state.stage = `busy`;
      // })
      // .addCase(getAllMainCategories.fulfilled, (state, { payload: { data, message } }: any) => {
      //   state.message = message;
      //   state.categories = data;

      //   state.stage = `idle`;
      // })
      // .addCase(getAllMainCategories.rejected, (state, { payload: { message } }: any) => {
      //   state.message = message;

      //   state.stage = `rejected`;
      // })
      // All subcategories
      .addCase(getAllSubCategories.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllSubCategories.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.subCategories = data;

        state.stage = `idle`;
      })
      .addCase(getAllSubCategories.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })
      //  Single category
      .addCase(getCategoryById.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getCategoryById.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.singleCategory = data;

        state.stage = `idle`;
      })
      .addCase(getCategoryById.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Single subcategory
      .addCase(getSubCategoryById.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getSubCategoryById.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.singleCategory = data;

        state.stage = `idle`;
      })
      .addCase(getSubCategoryById.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // DELETE:
      // Category
      .addCase(deleteCategory.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(deleteCategory.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;

        state.stage = `idle`;
      })
      .addCase(deleteCategory.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Subcategory
      .addCase(deleteSubCategory.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(deleteSubCategory.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;

        state.stage = `idle`;
      })
      .addCase(deleteSubCategory.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default CategoriesSlice.reducer;
