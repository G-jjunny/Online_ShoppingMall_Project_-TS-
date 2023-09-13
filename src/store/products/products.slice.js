import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // reducer를 추가하면 proise의 진행 상태에 따라서 reducer를 실행할 수 있다.
  extraReducers: () => {},
});
