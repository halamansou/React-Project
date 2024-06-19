import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  addNewProduct,
  deleteProduct,
} from "../API/productAPI";

export const getAllProductsAction = createAsyncThunk(
  "products/getAllProductsAction",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await getAllProducts();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewProductAction = createAsyncThunk(
  "products/addNewProductAction",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await addNewProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "products/deleteProductAction",
  async (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await deleteProduct(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], error: null, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllProductsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addNewProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNewProductAction.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addNewProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.meta.arg
      );
      state.isLoading = false;
    });
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
