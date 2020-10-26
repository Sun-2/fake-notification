import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  
  html {
    height: 100%;
  }
  
  #root {
    flex-grow: 1;  
  }
  
  html {
    font-size: calc(10 / 16 * 100%);
  }
  body {
    font-size: calc(16 / 10 * 100%);
  }
  
  img {
    display: block;
  }
`;
