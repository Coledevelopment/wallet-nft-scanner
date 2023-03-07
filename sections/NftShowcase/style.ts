import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  test: css``,
  image: css`
    position: relative;
    width: 300px;
  `,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
