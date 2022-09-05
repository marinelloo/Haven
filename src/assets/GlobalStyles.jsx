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
  
  strong {
    font-family: Jost Bold, sans-serif;
  }
  
  .pages-wrapper {
    margin: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .page-btn {
    padding: 10px 15px;
    border: 1px solid dodgerblue;
    cursor: pointer;
  }
  
  .page-btn__current {
    background-color: lightskyblue;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }
  
`