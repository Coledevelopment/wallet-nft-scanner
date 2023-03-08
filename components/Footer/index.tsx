import styles from "./style";
import NextLink from "next/link";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import navData from "../../data/nav.json";

interface FooterProps {
  children?: React.ReactNode;
  cssFooter?: CSSProp | CSSObject;
  cssIcon?: CSSProp | CSSObject;
  icon?: string;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  cssFooter,
  cssIcon,
  icon,
}) => {
  console.log();

  return (
    <div css={styles.footer}>
      <div>
        <p css={styles.footerCredits}>
          &#169; {new Date().getFullYear()} Cole Development
        </p>
      </div>
      <div css={styles.footerSocials}>
        <div css={styles.footerSocialIcon}>
          <a
            href="https://www.linkedin.com/in/christian-cole-595323a5/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/img/icon/linkedin.svg"}
              layout={"fixed"}
              height={40}
              width={40}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
