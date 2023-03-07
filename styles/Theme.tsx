import { ThemeProvider } from "styled-components";
import { GlobalReset } from "./GlobalReset";
import { GlobalStyles } from "./GlobalStyles";
import { GlobalFonts } from "./GlobalFonts";
import { GlobalColors } from "./GlobalColors";
import { ThemeLight } from "./ThemeLight";

interface ThemeProps {
  children: React.ReactNode;
}

const Theme: React.FunctionComponent<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalFonts />
      <GlobalColors />
      <GlobalReset />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
export default Theme;