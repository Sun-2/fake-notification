import React, { FC } from "react";
import { MediaGrid } from "./components/MediaGrid";
import { useSelector } from "react-redux";
import { getServiceWorkerStatus } from "./store/slices/main/selectors";
import { PermissionAskView } from "./components/PermissionAskView";

export const App: FC = () => {
  const serviceWorkerStatus = useSelector(getServiceWorkerStatus);

  switch (serviceWorkerStatus) {
    case "no-permission":
      return <p>no permission</p>;
    case "not-supported":
      return <p>Not supported</p>;
    default:
      return (
        <>
          <PermissionAskView />
          <MediaGrid />
        </>
      );
  }
};
