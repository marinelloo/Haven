import {createGlobalStyle} from "styled-components";
import JostBold from './fonts/Jost-Bold.ttf';
import JostRegular from './fonts/Jost-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Jost Regular, sans-serif;
  }

  @font-face {
    font-family: 'Jost Bold';
    src: url(${JostBold}); format('ttf');
  }

  @font-face {
    font-family: 'Jost Regular';
    src: url(${JostRegular}); format('ttf');
  }
  
  h1 {
    font-family: Jost Bold, sans-serif;
  }
  
`