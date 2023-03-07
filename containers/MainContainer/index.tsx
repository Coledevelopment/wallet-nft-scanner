import { CSSObject, CSSProp } from 'styled-components';
import classNs from '../../utils/classNs';
import styles from './style';

interface MainContainerProps {
  children: React.ReactNode;
  containerCss?: CSSProp | CSSObject;
}

const MainContainer: React.FunctionComponent<MainContainerProps> = ({
  children,
}) => {
  return <div css={styles.container}>{children}</div>;
};

export default MainContainer;
