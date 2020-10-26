import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ErrorHeader = styled(Paper)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.error.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
`;

ErrorHeader.defaultProps = {
  square: true,
};
