import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  nftCard: css`
    color: #fff;
    width: 300px;

    border-radius: 5px;
    background-color: #56586c;

    :hover {
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.6);
      transform: scale(1.02);,
      
    }
  `,
  nftCardMediaContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  nftCardMediaModalContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  nftCardMedia: css`
    width: 290px;
    height: 290px;
    margin: 5px;
    border-radius: 5px;
  `,
  nftModalMedia: css`
    width: 500px;
    height: 500px;
    margin: 5px;
    border-radius: 5px;

    @media ${device.mobile} {
      width: 80%;
      height: 80%;
    }
  `,

  nftCardDetails: css`
    display: flex;
    flex-direction: column;
    height: 150px;
    font-size: 16px;
    padding: 15px;
  `,
  nftModalDetails: css`
    display: flex;
    flex-direction: column;

    font-size: 16px;
    padding: 15px;
  `,

  detailsToken: css`
    display: flex;
    justify-content: space-between;
  `,
  modalButtons: css`
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
    margin-top: 20px;
  `,
  buttonModal: css`
    font-size: 16px;
    width: 100%;
    height: 50px;

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 100%;
    }
  `,
  detailsNames: css`
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    & h3 {
      font-weight: bold;
      word-break: break-word;
    }
  `,
};

export default styles;
