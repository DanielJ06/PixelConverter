import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
      list-style: none;
  }
  html, body, #root {
      height: 100%;
  }
  body, input, button, select {
      font-family: 'Roboto', sans-serif;
  }
  body {
      background-color: #e5e6f0;
      -webkit--font-smoothing: antialiased;
  }
`;