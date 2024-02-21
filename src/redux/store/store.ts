import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slice/filterSlice";
import productListSlice from "../slice/productListSlice";
import cartSlice from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    filterReducer: filterSlice,
    prdListReducer: productListSlice,
    cartReducer: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { warnAfter: 128 },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
