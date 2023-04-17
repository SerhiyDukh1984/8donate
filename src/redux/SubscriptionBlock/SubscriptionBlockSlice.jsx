import { createSlice } from "@reduxjs/toolkit";

const subscriptionBlockSlice = createSlice({
  name: "subscriptionBlock",
  initialState: {
    blockWidth: 400,
    blockHeight: 150,
    blockX: 300,
    blockY: 300,
    isOpen: true,
  },

  reducers: {
    changeSubscriptionBlock(state, { payload }) {
      const {
        blockWidth,
        blockHeight,
        blockX,
        blockY,
        isOpen,
        checked,
      } = payload;

      return {
        ...state,
        blockWidth,
        blockHeight,
        blockX,
        blockY,
        isOpen,
        checked,
      };
    },
  },
});

export default subscriptionBlockSlice.reducer;
export const { changeSubscriptionBlock } = subscriptionBlockSlice.actions;