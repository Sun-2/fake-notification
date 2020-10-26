import { RootState } from "../../type";

export const getServiceWorkerStatus = (state: RootState) =>
  state.notifications.serviceWorkerStatus;

export const getNotificationPermission = (state: RootState) =>
  state.notifications.notificationPermission;

export const getShowRequestNotificationPermissionView = (state: RootState) =>
  state.notifications.showRequestNotificationPermissionView;
