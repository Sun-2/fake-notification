import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ErrorHeader } from "./ErrorHeader";

export const NoNotificationPermission = () => {
  return (
    <ErrorHeader>
      <Typography align={"center"}>
        Looks like notifications are disabled for{" "}
        <SiteName>{window.location.hostname}</SiteName>.
      </Typography>

      <Typography align="center">
        Please enable them in your browser settings and refresh the page.
      </Typography>
    </ErrorHeader>
  );
};

const SiteName = styled.span`
  color: #0d0075;
`;
