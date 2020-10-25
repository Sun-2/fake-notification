import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  
  #root {
    flex-grow: 1;  
  }
  
  body {
    
  }
  
  img {
    display: block;
  }
`;
