import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosconfig";
import { ProductAttribute } from "../../types/Product.type";

type ProductListInitialState = {
  loading: boolean;
  prdListData: {
    data: {
      products: {
        items: Array<ProductAttribute>;
      };
    };
  };
  error: string | any;
};

const productListInitialState: ProductListInitialState = {
  loading: false,
  prdListData: {
    data: {
      products: {
        items: [],
      },
    },
  },
  error: "",
};

export const fetchProductList = createAsyncThunk(
  "productlist/fetchProductList",
  async (currentPage?: number) => {
    return (
      await axiosInstance.get(
        `/graphql?hash=1503538494&sort_1={"position":"ASC"}&filter_1={"price":{},"category_id":{"eq":660},"customer_group_id":{"eq":"0"}}&pageSize_1=9&currentPage_1=${currentPage}&_currency=""`
      )
    ).data;
  }
);

const productListSlice = createSlice({
  name: "productlist",
  initialState: productListInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.loading = false;
      let {
        products: {
          page_info: { current_page },
        },
      } = action.payload.data;
      console.log(current_page);
      state.prdListData = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productListSlice.reducer;
[].slice();
