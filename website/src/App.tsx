import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  getNotificationPermission,
  getServiceWorkerStatus,
} from "./store/slices/notifications/selectors";
import { PermissionAskView } from "./components/PermissionAskView";
import { MediaGridView } from "./components/MediaGridView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mediaGridViewRoute } from "./components/MediaGridView/route";
import { noNotificationPermissionRoute } from "./components/NoNotificationPermission/route";
import { swNotSupportedRoute } from "./components/SwNotSupported/route";
import { SwNotSupported } from "./components/SwNotSupported";
import { NoNotificationPermission } from "./components/NoNotificationPermission";

export const App: FC = () => {
  return (
    <>
      <PermissionAskView />
      <Switch>
        <Route path={`/${swNotSupportedRoute}`}>
          <SwNotSupported />
        </Route>
        <Route path={`/${noNotificationPermissionRoute}`}>
          <NoNotificationPermission />
        </Route>
        <Route path={`/${mediaGridViewRoute}`}>
          <MediaGridView />
        </Route>
      </Switch>
    </>
  );
};
