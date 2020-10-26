import React, { FC } from "react";
import styled from "styled-components";
import { ViewOnGithub } from "./components/ViewOnGithub";

export const Footer: FC = (props) => {
  return (
    <SFooter>
      <ViewOnGithub />
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(3)}px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  align-items: baseline;

  & > * {
    margin: 0 ${({ theme }) => theme.spacing(2)}px;
  }
`;
