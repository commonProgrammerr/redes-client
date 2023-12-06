import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
  html {
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.color.backgrond};
    color: ${({ theme }) => theme.color.text};
  }
  
  #root {
    height: 100vh;
    width: 100vw;
  }
  
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Segoe UI', Tahoma, Verdana, sans-serif;
  }
  
  button {
    cursor: pointer;  
    background: transparent;
  }

`;
