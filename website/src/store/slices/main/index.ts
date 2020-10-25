import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceWorkerStatus = "loading" | "error" | "ready";

const initialState = {
  serviceWorkerStatus: "loading" as ServiceWorkerStatus,
};

export type MainSlice = typeof initialState;

export const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    setServiceWorkerStatus: (
      state,
      action: PayloadAction<ServiceWorkerStatus>
    ) => {
      state.serviceWorkerStatus = action.payload;
    },
  },
});
