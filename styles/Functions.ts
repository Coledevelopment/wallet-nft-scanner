import { css } from "styled-components";
import { device } from "./Breakpoints";

export const setSize = (size: number) => {
  const viewport = 1440;
  const context = viewport * 0.01;

  return `${size / context}vw`;
};

export const setSizeMobile = (size: number) => {
  const viewport = 360;
  const context = viewport * 0.01;

  return `${size / context}vw`;
};

export const convertToRem = (size: number) => {
  return `${size / 10}rem`;
};

export const setLineHeight = (lineHeight: number, fontSize: number) => {
  return `${lineHeight / fontSize}`;
};

export const setImageDimensions = (desktop: any, mobile?: any) => {
  let desktopStyles;
  let mobileStyles;
  if (desktop && desktop.height && desktop.width) {
    desktopStyles = css`
      height: ${setSize(desktop.height)};
      width: ${setSize(desktop.width)};

      @media ${device.laptop} {
        height: ${convertToRem(desktop.height)};
        width: ${convertToRem(desktop.width)};
      }
    `;
  }

  if (mobile && mobile.height && mobile.width) {
    mobileStyles = css`
      @media ${device.mobile} {
        height: ${setSizeMobile(mobile.height)};
        width: ${setSizeMobile(mobile.width)};
      }
    `;
  }
  return css`
    ${desktopStyles ? desktopStyles : ""}
    ${mobileStyles ? mobileStyles : ""}
  `;
};

export const setBackgroundColor = (color: string) => {
  const property = `--color-${color}`;

  return css`
    background-color: var(${property});
  `;
};

export const progressWidth = (progress: number) => {
  if (progress >= 100) {
    return css`
      width: ${100 + "%;"};
    `;
  }

  return css`
    width: ${progress + "%;"};
  `;
};