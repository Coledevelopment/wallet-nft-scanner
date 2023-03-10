import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 180px);
    background-image: url("/img/pattern-randomized.svg");
  `,
};

export default styles;
