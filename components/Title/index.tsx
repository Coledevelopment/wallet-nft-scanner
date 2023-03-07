import styles from './style';
import { CSSProp, CSSObject } from 'styled-components';
import classNs from '../../utils/classNs';

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  cssTitle?: CSSProp | CSSObject;
}

const Title: React.FunctionComponent<TitleProps> = ({
  level,
  text,
  cssTitle,
}) => {
  return (
    <>
      {level === 1 && (
        <h1 css={classNs(styles['h1'], cssTitle && cssTitle)}>{text}</h1>
      )}
      {level === 2 && (
        <h2 css={classNs(styles['h2'], cssTitle && cssTitle)}>{text}</h2>
      )}
      {level === 3 && (
        <h3 css={classNs(styles['h3'], cssTitle && cssTitle)}>{text}</h3>
      )}
      {level === 4 && (
        <h4 css={classNs(styles['h4'], cssTitle && cssTitle)}>{text}</h4>
      )}
      {level === 5 && (
        <h5 css={classNs(styles['h5'], cssTitle && cssTitle)}>{text}</h5>
      )}
      {level === 6 && (
        <h6 css={classNs(styles['h6'], cssTitle && cssTitle)}>{text}</h6>
      )}
    </>
  );
};

export default Title;
