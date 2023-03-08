import { css } from "styled-components";
import { setSize } from "../../styles/Functions";
import { device } from "../../styles/Breakpoints";

const Styles = {
  container: css`
    height: 100%;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.mobile} {
      align-items: flex-end;
    }
  `,
  contentWrap: css`
    max-width: 592px;
    width: 100%;
    background-color: var(--color-white);
    position: relative;

    @media ${device.laptop} {
      max-width: 592px;
    }

    @media ${device.mobile} {
      max-height: 95vh;
      max-width: 100%;
      margin: 0;
      overflow-y: scroll;
    }
  `,
  closeButton: css`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 16px;
    height: 16px;
    cursor: pointer;

    @media ${device.laptop} {
      right: 16px;
      top: 16px;
      width: 16px;
      height: 16px;
    }

    @media ${device.mobile} {
      right: 16px;
      top: 16px;
      width: 16px;
      height: 16px;
    }
  `,
  content: css`
    padding: 32px;

    @media ${device.laptop} {
      padding: 32px;
    }

    @media ${device.mobile} {
      padding: 0;
    }
  `,
};

export default Styles;
