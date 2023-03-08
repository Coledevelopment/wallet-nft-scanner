import styles from "./style";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";

interface TextProps {
  text: string;
  cssText?: CSSProp | CSSObject;
}

const Text: React.FunctionComponent<TextProps> = ({ text, cssText }) => {
  return (
    <p
      css={classNs(styles.text, cssText && cssText)}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Text;
