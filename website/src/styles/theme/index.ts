import { DefaultTheme } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export type AppTheme = typeof theme;

export const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
