import { useState, useEffect } from "react";
import { size, SizeNames } from "../styles/Breakpoints";

const getDeviceConfig = (width: number) => {
  switch (true) {
    case width > 0 && width <= size.mobile:
      return SizeNames.mobile;
    case width > 0 && width <= size.tablet:
      return SizeNames.tablet;
    case width > 0 && width >= size.tablet:
      return SizeNames.laptop;
    default:
      return "";
  }
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(0);

  const calcInnerWidth = function () {
    setBreakpoint(window.innerWidth);
  };

  useEffect(() => {
    calcInnerWidth();
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, [breakpoint]);

  return getDeviceConfig(breakpoint);
};
export default useBreakpoint;
