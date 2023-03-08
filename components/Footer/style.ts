import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  footer: css`
    color: var(--color-white);

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 10rem;
    background-color: var(--color-pitch-black);
    padding: 0 12rem;
  `,
  footerCredits: css`
    font-size: 1.6rem;
    font-weight: bold;

    &:hover {
      cursor: default;
      color: var(--color-pink);
    }
  `,
  footerSocials: css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
  `,
  footerSocialIcon: css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    background-color: var(--color-white);

    &: hover {
      cursor: pointer;
      background-color: var(--color-pink);
    }
  `,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
