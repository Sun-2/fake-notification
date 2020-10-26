import React, { FC } from "react";
import { MediaGrid } from "./components/MediaGridView/components/MediaGrid";
import { useSelector } from "react-redux";
import {
  getNotificationPermission,
  getServiceWorkerStatus,
} from "./store/slices/notifications/selectors";
import { PermissionAskView } from "./components/PermissionAskView";
import { MediaGridView } from "./components/MediaGridView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App: FC = () => {
  const serviceWorkerStatus = useSelector(getServiceWorkerStatus);
  const notificationPermission = useSelector(getNotificationPermission);

  if (
    notificationPermission !== "denied" &&
    serviceWorkerStatus !== "not-supported"
  ) {
    return (
      <Router>
        <PermissionAskView />
        <Switch>
          <Route path={"sw-not-supported"}>
            <p>sw not supported</p>
          </Route>
          <Route path={"notifications-error"}>
            <p>notifications error</p>
          </Route>
          <Route>
            <MediaGridView />
          </Route>
        </Switch>
      </Router>
    );
  } else return <p>Something went wrong</p>;
};
