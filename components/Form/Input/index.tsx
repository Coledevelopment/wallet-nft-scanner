import styles from "./style";
import { CSSProp, CSSObject, css } from "styled-components";
import classNs from "../../../utils/classNs";
import Image from "next/image";
import Text from "../../Text";

interface InputProps {
  text?: string;
  value?: string;
  type: string;
  onClick?: (event: React.FormEvent) => void;
  cssInput?: CSSProp | CSSObject;
  icon?: string;
  cssIcon?: CSSProp | CSSObject;
  svgIcon?: React.ReactNode;
  disabled?: boolean;
}

export const Input: React.FunctionComponent<InputProps> = ({
  text,
  value,
  type,
  onClick,
  cssInput,
  cssIcon,
  icon,
  svgIcon,
  disabled = false,
}) => {
  return (
    <>
      <div css={styles.inputContainer}>
        <label htmlFor="input" css={styles.label}>
          <Text cssText={styles.labelText} text={"Wallet Address"} />
        </label>
        <label htmlFor="input" css={styles.label}>
          <Text cssText={styles.labelText} text={text ? text : ""} />
        </label>
        <input
          id={"input"}
          type="text"
          css={styles.input}
          defaultValue={value && value}
          disabled={disabled && disabled}
        />
      </div>
      {/* {icon && (
        <span css={classNs(styles.icon, cssIcon && cssIcon)}>
          <Image alt="" src={icon} layout="fill" objectFit="contain" />
        </span>
      )}
      {svgIcon && (
        <span css={classNs(styles.icon, cssIcon && cssIcon)}>{svgIcon}</span>
      )} */}
    </>
  );
};
