import { MainSlice } from "./slices/main";
import {NotificationsSlice} from "./slices/notifications/types";

export interface RootState {
  main: MainSlice;
  notifications: NotificationsSlice
}
