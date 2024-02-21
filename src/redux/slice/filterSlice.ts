import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosconfig";
const QUERY_STRING = `hash=1939556590&filter_1={"price":{},"category_id":{"eq":660},"customer_group_id":{"eq":0}}&"_currency"=''`;

type FilterInitialState = {
  loading: boolean;
  filterData: {
    data: {
      products: {
        filters: Array<{
          filter_items: Array<{
            label: string;
            count: number;
            value_string: string;
            swatch_data: string;
          }>;
          name: string;
          has_swatch: boolean;
          request_var: string;
          is_boolean: boolean;
        }>;
        max_price?: number;
        min_price?: number;
      };
    };
  };
  error: string | any;
};

const filterInitialState: FilterInitialState = {
  loading: false,
  filterData: {
    data: {
      products: {
        filters: [],
        max_price: 0,
        min_price: 0,
      },
    },
  },
  error: "",
};

export const fetchFilterData = createAsyncThunk(
  "filter/fetchFilterData",
  async () => {
    return (await axiosInstance.get(`/graphql?${QUERY_STRING}`)).data;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFilterData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilterData.fulfilled, (state, action) => {
      state.loading = false;
      state.filterData = action.payload;
    });
    builder.addCase(fetchFilterData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default filterSlice.reducer;
[].map((value) => {
  console.log(value);
});
