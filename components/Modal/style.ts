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
    max-width: ${setSize(592)};
    width: 100%;
    background-color: var(--color-white);
    position: relative;

    @media ${device.laptop} {
      max-width: 59.2rem;
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
    right: ${setSize(16)};
    top: ${setSize(16)};
    width: ${setSize(16)};
    height: ${setSize(16)};
    cursor: pointer;

    @media ${device.laptop} {
      width: 1.6rem;
      height: 1.6rem;
      right: 1.6rem;
      top: 1.6rem;
    }

    @media ${device.mobile} {
      width: 1.6rem;
      height: 1.6rem;
      right: 1.6rem;
      top: 1.6rem;
    }
  `,
  content: css`
    padding: ${setSize(32)};

    @media ${device.laptop} {
      padding: 3.2rem;
    }

    @media ${device.mobile} {
      padding: 0;
    }
  `,
};

export default Styles;
