import { createSlice } from "@reduxjs/toolkit";

const donateSlice = createSlice({
  name: "donate",
  initialState: {
    donates: [],
  },

  reducers: {
    addDonateReducer(state, { payload }) {
      return {
        ...state,
        donates: [...payload]
      };
    },
    clearDonates() {
      return { donates: [] };
    },
  },
});

export default donateSlice.reducer;
export const { addDonateReducer, clearDonates } = donateSlice.actions;
