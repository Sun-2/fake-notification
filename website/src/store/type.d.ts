import { MainSlice } from "./slices/main";
import {NotificationsSlice} from "./slices/notifications/types";
import {RouterState} from "connected-react-router";

export interface RootState {
  main: MainSlice;
  notifications: NotificationsSlice
  router: RouterState
}
