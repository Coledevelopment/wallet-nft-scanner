import * as styled from "styled-components";

export const GlobalFonts = styled.createGlobalStyle`
  @font-face {
    font-family: "SurtNormal";
    src: url("/fonts/SurtNormal-Regular.woff2") format("woff2"),
      url("/fonts/SurtNormal-Regular.woff") format("woff"),
      url("/fonts/SurtNormal-Regular.otf") format("otf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SurtNormal";
    src: url("/fonts/SurtNormal-Medium.woff2") format("woff2"),
      url("/fonts/SurtNormal-Medium.woff") format("woff"),
      url("/fonts/SurtNormal-Medium.otf") format("otf");
    font-weight: 500;
    font-style: normal;
  }

  :root {
    --ff-SurtNormal: SurtNormal, sans-serif;
    --ff-Arial: Arial, sans-serif;
  }
`;
