import { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { setSize, setLineHeight } from "../../styles/Functions";

const styles = {
  nftCard: css`
    color: #fff;
    width: 300px;
    border: 10px solid #000;
    border-radius: 10px;
    background-color: #222;

    :hover {
      box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.6);
      tramsform: scale(1.1);
    }
  `,
  nftCardMediaContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  nftCardMedia: css`
    width: 280px;
    height: 280px;
  `,

  nftCardDetails: css`
    display: flex;
    flex-direction: column;
    height: 150px;
    font-size: 16px;
    padding: 15px;
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
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
