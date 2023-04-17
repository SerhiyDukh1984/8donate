import { createSlice } from "@reduxjs/toolkit";

const trackingBlockSlice = createSlice({
  name: "trackingBlock",
  initialState: {
    blockWidth: 400,
    blockHeight: 150,
    blockX: 300,
    blockY: 300,
    isOpen: true,
  },

  reducers: {
    changeTrackingBlock(state, { payload }) {
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

export default trackingBlockSlice.reducer;
export const { changeTrackingBlock } = trackingBlockSlice.actions;