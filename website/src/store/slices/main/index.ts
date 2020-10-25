import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceWorkerStatus =
  | "loading"
  | "not-supported"
  | "ready"
  | "no-permission";

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
