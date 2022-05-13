import { createSlice } from '@reduxjs/toolkit';

// util:
import { SliceAlertTypes } from '../../../common/@types/slice-alert.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceAlertTypes = {
  isAlertOpened: true,
};

// CREATE THE SLICE::
export const AlertSlice = createSlice({
  name: `comp/dashboard-aside`,
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.isAlertOpened = false;
    },
    openAlert: (state) => {
      state.isAlertOpened = true;
    },
  },
});

// EXPORT THE ACTIONS::
export const { closeAlert, openAlert } = AlertSlice.actions;

// EXPORT THE prods-collection REDUCER::
export default AlertSlice.reducer;
