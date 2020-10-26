import React from "react";
import {Typography} from "@material-ui/core";
import {ErrorHeader} from "./ErrorHeader";

export const SwNotSupported = () => {
  return (
    <ErrorHeader>
      <Typography>Your browser does not support notifications.</Typography>
    </ErrorHeader>
  );
};

