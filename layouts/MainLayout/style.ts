import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  layout: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 100vh;
  `,

  content: css`
    display: block;
    align-items: center;
    width: 100%;
  `,
};

export default styles;
