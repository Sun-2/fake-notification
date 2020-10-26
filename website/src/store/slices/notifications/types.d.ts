import {initialState} from "./slice";

export type ServiceWorkerStatus = "loading" | "ready" | "not-supported";

export type NotificationPermission = "granted" | "denied";

export type NotificationsSlice = typeof initialState;