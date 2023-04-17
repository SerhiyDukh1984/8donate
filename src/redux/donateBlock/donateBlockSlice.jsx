import { createSlice } from "@reduxjs/toolkit";

const donateBlockSlice = createSlice({
  name: "donateBlock",
  initialState: {
    blockWidth: 400,
    blockHeight: 150,
    blockX: 300,
    blockY: 300,
    avatarWidth: 120,
    avatarHeight: 150,
    avatarBorderRadius: 0,
    textTop: 0,
    textLeft: 130,
    top: 0,
    left: 0,
    isOpen: true,
    checked: false,
  },

  reducers: {
    changeDonateBlock(state, { payload }) {
      const {
        blockWidth,
        blockHeight,
        blockX,
        blockY,
        avatarWidth,
        avatarHeight,
        avatarBorderRadius,
        textTop,
        textLeft,
        top,
        left,
        isOpen,
        checked,
      } = payload;

      return {
        ...state,
        blockWidth,
        blockHeight,
        blockX,
        blockY,
        avatarWidth,
        avatarHeight,
        avatarBorderRadius,
        textTop,
        textLeft,
        top,
        left,
        isOpen,
        checked,
      };
    },
  },
});

export default donateBlockSlice.reducer;
export const { changeDonateBlock } = donateBlockSlice.actions;
