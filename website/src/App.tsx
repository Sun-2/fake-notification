import React, { FC } from "react";
import { PermissionAskView } from "./components/PermissionAskView";
import { MediaGridView } from "./components/MediaGridView";
import { Route, Switch } from "react-router-dom";
import { mediaGridViewRoute } from "./components/MediaGridView/route";

export const App: FC = () => {
  return (
    <>
      <PermissionAskView />
      <Switch>
        <Route path={`/${mediaGridViewRoute}`}>
          <MediaGridView />
        </Route>
      </Switch>
    </>
  );
};
