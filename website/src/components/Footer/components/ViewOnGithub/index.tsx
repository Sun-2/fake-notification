import React, { FC } from "react";
import { Button, Link, Typography } from "@material-ui/core";
import styled from "styled-components";

const gitHubLink = "https://github.com/Sun-2/fake-notification";

export const ViewOnGithub: FC = (props) => {
  return (
    <Link {...props} href={gitHubLink} color={"inherit"} variant={"overline"}>
      View on GitHub
    </Link>
  );
};