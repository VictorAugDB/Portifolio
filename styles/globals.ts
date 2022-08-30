import { createGlobalStyle } from "styled-components";
import { lighten } from 'polished'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: font-weight .175s ease-in-out;
    
    &:hover {
      font-weight: bold;
    }
  }

  * {
    padding: 0;
    margin: 0;
  }

  * , *:before, *:after {
    box-sizing: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: #2D2D2D;
    }
  }
`;

export default GlobalStyle;


