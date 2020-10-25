import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceWorkerStatus =
  | "loading"
  | "not-supported"
  | "ready"
  | "no-permission";

const initialState = {
  serviceWorkerStatus: "loading" as ServiceWorkerStatus,
  showRequestNotificationPermissionView: false,
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
    setShowRequestNotificationPermissionView: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.showRequestNotificationPermissionView = action.payload;
    },
  },
});
