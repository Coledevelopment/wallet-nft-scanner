import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  navbar: css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--color-pitch-black);
    height: 8rem;
    width: 100%;
    padding: 0 10rem;
    z-index: 99;
  `,
  logo: css`
    width: 70px;
    height: 70px;

    &: hover {
      cursor: pointer;
      transform: scale(1.02);
      box-shadow: 0px 0px 20px var(--color-pink);
    }
  `,
  navbarLinks: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    column-gap: 2rem;
    padding: 0 3rem;
  `,

  navbarLinkContainer: css`
    position: relative;
  `,
  navbarLink: css`
    background-color: var(--color-pitch-black);
    color: var(--color-white);
    font-size: 2rem;
    line-height: 120%;
    font-weight: 600;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid var(--color-pink);
      color: var(--color-pink);
      animation: hoverEffect 0.5s ease;
      @keyframes hoverEffect {
        0% {
          background-color: var(--color-pitch-black);
          color: var(--color-white);
        }
        100% {
          border-bottom: 2px solid var(--color-pink);
          color: var(--color-pink);
        }
      }
    }
  `,

  activeLink: css`
    border-bottom: 2px solid var(--color-pink);
    color: var(--color-pink);
  `,

  navbarSubLink: css`
    box-sizng: border-box;
    background-color: var(--color-pitch-black);
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: right;

    &:hover {
      color: var(--color-pink);
      border-right: 4px solid var(--color-pink);
      padding-right: 1.6rem;

      animation: hoverEffect2 0.5s ease;
      @keyframes hoverEffect2 {
        0% {
          background-color: var(--color-pitch-black);
          color: var(--color-white);
        }
        100% {
          color: var(--color-pink);
          border-right: 4px solid var(--color-pink);
          padding-right: 1.6rem;
        }
      }
    }
  `,

  activeSubLink: css`
    color: var(--color-pink);
    border-right: 4px solid var(--color-pink);
    padding-right: 1.6rem;
  `,

  navbarDropdown: css`
    position: absolute;
    top: 5.5rem;
    right: 0;
    background-color: transparent;

    min-width: 12rem;
    width: max-content;
    border: 4px solid var(--color-pink);
    border-radius: 5px;
    animation: opacity 0.5s ease;

    @keyframes opacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 100%;
      }
    }
  `,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
