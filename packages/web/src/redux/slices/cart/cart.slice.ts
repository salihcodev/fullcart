// util:
import { createSlice } from '@reduxjs/toolkit';
import { dropCollection } from '../collection-utils/wipe.logic';
import { addNewCartItem } from './logic/add.logic';
import { deleteCartItem } from './logic/delete.logic';
import { checkIfItemExisted, getAllCartItems } from './logic/read.logic';
import crudSync from './logic/crud-sync.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  status: null,
  creationResult: {},
  deletionResult: null,
  items: [],
  message: null,
  cartStats: { count: 0, cost: 0 },
  isItemAddedToTheCart: null,
  stageForDrop: `idle`,
  stage: `idle`,
};

// CREATE THE SLICE::
export const CartSlice = createSlice({
  name: `CartSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      // CREATING:
      .addCase(addNewCartItem.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(addNewCartItem.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.creationResult = data;

        // update cart list on adding
        state.items = new crudSync(state).onAddingSync();

        // Get cart count
        state.cartStats.count = new crudSync(state).getCartCount();

        // Calculate the total cost of the cart
        state.cartStats.cost = new crudSync(state).getTotalCost();

        state.isItemAddedToTheCart = true;
        state.stage = `idle`;
      })
      .addCase(addNewCartItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // READING:
      .addCase(getAllCartItems.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllCartItems.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.items = data;

        // Get cart count
        state.cartStats.count = new crudSync(state).getCartCount();

        // Calculate the total cost of the cart
        state.cartStats.cost = new crudSync(state).getTotalCost();

        state.stage = `idle`;
      })
      .addCase(getAllCartItems.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // DELETION:
      .addCase(deleteCartItem.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(deleteCartItem.fulfilled, (state, { payload: { message, id } }: any) => {
        state.message = message;
        state.deletionResult = id;

        // update cart list on deleting
        state.items = new crudSync(state).onDeletingSync();

        // Get cart count
        state.cartStats.count = new crudSync(state).getCartCount();

        // Calculate the total cost of the cart
        state.cartStats.cost = new crudSync(state).getTotalCost();

        state.stage = `idle`;
      })
      .addCase(deleteCartItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // DROP CART DOCUMENT:
      .addCase(dropCollection.pending, (state) => {
        state.stageForDrop = `busy`;
      })
      .addCase(dropCollection.fulfilled, (state, { payload: { message } }: any) => {
        state.message = message;

        // Get cart count
        state.cartStats.count = new crudSync(state).getCartCount();

        // Calculate the total cost of the cart
        state.cartStats.cost = new crudSync(state).getTotalCost();

        state.stageForDrop = `idle`;
      })
      .addCase(dropCollection.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stageForDrop = `rejected`;
      })

      // Check if the item in the cart already or not.
      .addCase(checkIfItemExisted.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(checkIfItemExisted.fulfilled, (state, { payload: { isItemAddedToTheCart } }) => {
        state.isItemAddedToTheCart = isItemAddedToTheCart;

        state.stage = `idle`;
      })
      .addCase(checkIfItemExisted.rejected, (state, { payload }) => {
        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default CartSlice.reducer;
