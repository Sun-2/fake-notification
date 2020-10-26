import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export type MainSlice = typeof initialState;

export const main = createSlice({
  name: "main",
  initialState,
  reducers: {},
});
