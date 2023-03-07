import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  button: css`
    height: 64px;
    background: #3d2c8d;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0.085em;
    padding: 0 2rem;
  `,
  dark: css`
    background-color: #000;
  `,
  light: css``,
  primary: css`
    background-color: var(--color-pitch-black);
    color: var(--color-white);
    font-weight: 600;

    &: hover {
      color: var(--color-pink);
      cursor: pointer;
    }
  `,
  secondary: css``,
  transparent: css``,
  disabled: css``,
  icon: css``,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
