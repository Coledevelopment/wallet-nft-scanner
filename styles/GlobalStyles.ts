import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html,
  button,
  input,
  select,
  textarea {
    color: color: var(--color-black);
    -webkit-border-radius: 0;
    border-radius: 0;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-black);
    }
  }

  html {
    font-size: 62.5%;
    height: 100%;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }

  body {
    background-color: white;
    color: color: var(--color-black);
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    position: relative;
    scroll-behavior: smooth;
    min-height: 100vh;
    width: 100%;
    font-family: var(--ff-Arial);
  }

  audio,
  canvas,
  img,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ff-Arial);
    text-transform: uppercase;
  }
`;
