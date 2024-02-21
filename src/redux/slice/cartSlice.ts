import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartInitialState = {
  isOpen: boolean;
};

const cartInitialState: CartInitialState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    handleCartToOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { handleCartToOpen } = cartSlice.actions;
