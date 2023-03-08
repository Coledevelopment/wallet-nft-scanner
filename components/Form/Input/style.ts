import { css } from "styled-components";
import { device } from "../../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../../styles/Functions";

const styles = {
  inputContainer: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
  `,

  label: css`
    position: absolute;
    height: 35px;
    top: -50%;
    left: 5%;
    background-color: #000;
    padding: 10px;
    border-radius: 10px;
  `,
  labelText: css`
    font-style: bold;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #fff;
  `,
  input: css`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #637381;
  `,
  disabled: css``,
  icon: css`
    line-height: 0;
    position: absolute;
    left: 0;
    align-self: center;
    padding-left: 20px;
  `,
};

export default styles;
