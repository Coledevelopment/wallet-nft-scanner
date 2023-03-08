import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  cardContainer: css`
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
  `,
  image: css`
    position: relative;
    width: 300px;
  `,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
