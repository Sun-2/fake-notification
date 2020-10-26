import React, { FC } from "react";
import { MediaGrid } from "./components/MediaGrid";
import { useSelector } from "react-redux";
import {
  getNotificationPermission,
  getServiceWorkerStatus,
} from "./store/slices/notifications/selectors";
import { PermissionAskView } from "./components/PermissionAskView";

export const App: FC = () => {
  const serviceWorkerStatus = useSelector(getServiceWorkerStatus);
  const notificationPermission = useSelector(getNotificationPermission);

  if (
    notificationPermission !== "denied" &&
    serviceWorkerStatus !== "not-supported"
  ) {
    return (
      <>
        <PermissionAskView />
        <MediaGrid />
      </>
    );
  } else return <p>Something went wrong</p>;
};
