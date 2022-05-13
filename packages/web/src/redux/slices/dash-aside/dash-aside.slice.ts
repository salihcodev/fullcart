import { createSlice } from '@reduxjs/toolkit';
import { SliceDashAsideTypes } from '../../../common/@types/slice-dash-aside.types';

// util:

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceDashAsideTypes = {
  isAsideOpened: true,
};

// CREATE THE SLICE::
export const DashAsideSlice = createSlice({
  name: `comp/dashboard-aside`,
  initialState,
  reducers: {
    toggleAsideState: (state) => {
      state.isAsideOpened = !state.isAsideOpened;
    },
  },
});

// EXPORT THE ACTIONS::
export const { toggleAsideState } = DashAsideSlice.actions;

// EXPORT THE prods-collection REDUCER::
export default DashAsideSlice.reducer;
