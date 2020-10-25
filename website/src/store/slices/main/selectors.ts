import { RootState } from "../../type";

export const getServiceWorkerStatus = (state: RootState) =>
  state.main.serviceWorkerStatus;
