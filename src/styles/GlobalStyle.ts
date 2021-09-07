import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #f0f0f7;

    --color-primary-lighter: #9871f5;
    --color-primary-light: #916bea;
    --color-primary: #8257e5;
    --color-primary-dark: #774dd6;
    --color-primary-darker: #6842c2;

    --color-secondary: #04d361;
    --color-secondary-dark: #04bf58;

    --color-danger: #d31204;
    --color-danger-dark: #ab1409;

    --color-title-in-primary: #ffffff;

    --color-text-in-primary: #d4c2ff;
    --color-text-title: #32264d;
    --color-text-complement: #9c98a6;
    --color-text-base: #6a6180;

    --color-line-in-white: #e6e6f0;

    --color-input-background: #f8f8fc;

    --color-button-text: #ffffff;

    --color-box-base: #ffffff;
    --color-box-footer: #fafafc;

    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  *,
  button,
  input,
  textarea,
  select {
    font-size: 1.6rem;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
`;
