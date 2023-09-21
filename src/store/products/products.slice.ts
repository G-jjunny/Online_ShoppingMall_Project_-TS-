import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

// 리덕스툴킷에서 비동기요청을 할때 사용하는것
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string, thunkAPI) => {
    try {
      let response;
      if (category) {
        response = await axios.get<IProduct[]>(
          `https://fakestoreapi.com/products/category/${category}`
        );
      } else {
        response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products"
        );
      }
      // console.log(response, category);
      return response.data; //payload
    } catch (error) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

type ProductsType = {
  products: IProduct[];
  isLoading: boolean;
  error: string;
};

const initialState: ProductsType = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // reducer를 추가하면 proise의 진행 상태에 따라서 reducer를 실행할 수 있다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
