import styles from "./style";
import NextLink from "next/link";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import navData from "../../data/nav.json";

import { ConnectButton } from "@rainbow-me/rainbowkit";

interface NavbarProps {
  children?: React.ReactNode;
  cssNavbar?: CSSProp | CSSObject;
  cssIcon?: CSSProp | CSSObject;
  icon?: string;
}

const TopMenu: React.FunctionComponent<NavbarProps> = ({
  children,
  cssNavbar,
  cssIcon,
  icon,
}) => {
  const [active, setActive] = useState("");
  const router = useRouter();

  const handleMenuClick = (elem: string) => {
    if (elem === active) {
      setActive("");
    } else {
      setActive(elem);
    }
  };

  console.log();

  return (
    <div css={styles.navbar}>
      <div css={styles.logo}>
        <Image
          src={navData.topNavigation.logo}
          layout={"responsive"}
          height={130}
          width={130}
          alt="logo"
        ></Image>
      </div>

      <div css={styles.navbarLinks}>
        <ConnectButton />
      </div>
    </div>
  );
};

export default TopMenu;
