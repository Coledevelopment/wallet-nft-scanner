import { css } from 'styled-components';
import { device } from '../../styles/Breakpoints';
import { setSize, setLineHeight } from '../../styles/Functions';

const styles = {
  h1: css`
    font-size: 6rem;
    color: blue;
    font-weight: 600;
  `,
  h2: css``,
  h3: css``,
  h4: css``,
  h5: css``,
  h6: css``,
};

export default styles;
// Use for device spesific styling
// @media ${device.laptop} {}
// @media ${device.mobile} {}
