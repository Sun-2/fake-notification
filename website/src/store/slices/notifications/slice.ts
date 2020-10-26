import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ServiceWorkerStatus} from "./types";

export const initialState = {
  serviceWorkerStatus: "loading" as ServiceWorkerStatus,
  notificationPermission: "default" as NotificationPermission,
  showRequestNotificationPermissionView: false,
};

export type MainSlice = typeof initialState;

export const notifications = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setServiceWorkerStatus: (
      state,
      action: PayloadAction<MainSlice["serviceWorkerStatus"]>
    ) => {
      state.serviceWorkerStatus = action.payload;
    },
    setNotificationPermission: (
      state,
      action: PayloadAction<MainSlice["notificationPermission"]>
    ) => {
      state.notificationPermission = action.payload;
    },
    setShowRequestNotificationPermissionView: (
      state,
      action: PayloadAction<MainSlice["showRequestNotificationPermissionView"]>
    ) => {
      state.showRequestNotificationPermissionView = action.payload;
    },
  },
});
