import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
    row-gap: 60px;
  `,
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
  headerText: css`
    font-style: noraml;
    font-weight: bold;
    font-size: 24px;
    line-height: 110%px;
    color: #000;
    text-align: center;

    @media ${device.tablet} {
      padding: 0 10px;
    }
  `,
  image: css`
    position: relative;
    width: 300px;
  `,

  form: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;

    @media ${device.tablet} {
      max-width: 90%;
      font-size: 14px;
      margin: 0;
    }
  `,
  formError: css`
    font-style: noraml;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%px;
    color: red;

    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  `,
  submitButton: css`
    width: 600px;

    @media ${device.tablet} {
      max-width: 90%;
      font-size: 14px;
      margin: 0;
    }
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

    @media ${device.tablet} {
      max-width: 90%;
      font-size: 16px;
      margin: 0;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
  `,
};

export default styles;
