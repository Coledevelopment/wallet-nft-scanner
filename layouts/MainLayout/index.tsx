import { CSSObject, CSSProp } from "styled-components";
import Image from "next/image";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import MainContainer from "../../containers/MainContainer";
import classNs from "../../utils/classNs";
import styles from "./style";
import Footer from "../../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  layoutCss?: CSSProp | CSSObject;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
  layoutCss,
}) => {
  return (
    <div css={classNs(styles.layout, layoutCss)}>
      <Navbar />
      <MainContainer>
        <main css={styles.content}>{children}</main>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default MainLayout;
