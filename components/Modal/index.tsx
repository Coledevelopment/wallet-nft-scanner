import { useRef } from "react";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Styles from "./style";
import ReactDom from "react-dom";
import Image from "next/image";
import useWindowEvent from "../../hooks/useWindowEvent";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalComponent: React.FunctionComponent<ModalProps> = ({
  children,
  onClose,
}) => {
  useLockBodyScroll();

  const element = document.getElementById("modal");
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: any) => {
    if (
      ref &&
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target !== ref.current.parentNode?.firstChild
    ) {
      onClose();
    }
  };

  useWindowEvent("mousedown", handleClickOutside);

  if (!element) {
    return null;
  }

  return ReactDom.createPortal(
    <div css={Styles.container}>
      <div css={Styles.contentWrap} ref={ref}>
        <div css={Styles.closeButton} onClick={onClose}>
          <Image src={"/img/modal-close.svg"} alt="" layout="fill" />
        </div>
        <div css={Styles.content}>{children}</div>
      </div>
    </div>,
    element
  );
};

export default ModalComponent;
