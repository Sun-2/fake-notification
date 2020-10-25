import { Theme } from "@material-ui/core";
import { AppTheme, theme } from "./theme";

export const media = theme.breakpoints.keys.reduce((acc, curr) => {
  acc[curr] = ({ theme }: { theme: AppTheme }) =>
    `@media only screen and (min-width: ${theme.breakpoints.values[curr]}px)`;

  return acc;
}, {} as { [key in keyof Theme["breakpoints"]["values"]]: (...args: any) => string });
