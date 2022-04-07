import styled from "styled-components";

import useTheme from "../hooks/useTheme";

const Header = () => {
  const { darkTheme, onClickThemeMode } = useTheme();
  return (
    <HeaderContainer>
      <button onClick={onClickThemeMode}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export default Header;
