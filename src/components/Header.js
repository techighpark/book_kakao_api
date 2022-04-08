import styled from "styled-components";
import { BrightnessHighFill } from "@styled-icons/bootstrap/BrightnessHighFill";
import { Brightness2 } from "@styled-icons/material/Brightness2";

import useTheme from "../hooks/useTheme";

const Header = () => {
  const { darkTheme, onClickThemeMode } = useTheme();
  return (
    <HeaderContainer>
      <ThemeBtn onClick={onClickThemeMode}>
        {darkTheme ? <SunIcon /> : <MoonIcon />}
      </ThemeBtn>
    </HeaderContainer>
  );
};

const MoonIcon = styled(Brightness2)`
  height: 15px;
`;
const SunIcon = styled(BrightnessHighFill)`
  height: 15px;
`;

const ThemeBtn = styled.div`
  padding: 10px;
`;
const HeaderContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export default Header;
