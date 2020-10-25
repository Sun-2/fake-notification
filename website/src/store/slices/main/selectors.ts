import { RootState } from "../../type";

export const getServiceWorkerStatus = (state: RootState) =>
  state.main.serviceWorkerStatus;

export const getShowRequestNotificationPermissionView = (state: RootState) =>
  state.main.showRequestNotificationPermissionView;
