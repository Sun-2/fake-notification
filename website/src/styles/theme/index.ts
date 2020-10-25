import { DefaultTheme } from "styled-components";
import {createMuiTheme} from "@material-ui/core";

type AppTheme = typeof theme;

export const theme = createMuiTheme({

})

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
