import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "#202124",
  fontColor: "#EEEEEE",
  fontLightColor: "#999999",
  borderColor: "#5f6368",
  borderHoverColor: "#9aa0a6",
  inputBgColor: "#202124",
  inputFontColor: "#e8eaed",
  inputIconColor: "#9aa0a6",
  inputHoverBgColor: "#303134",
  btnBgColor: "#303134",
  btnFontSize: "12px",
  btnFontWeight: "400",
  btnLetterSpacing: "0.05em",
};

export const lightMode = {
  bgColor: "#FFFFFF",
  fontColor: "#757575",
  fontLightColor: "#81868B",
  borderColor: "#5f6368",
  borderHoverColor: "#9aa0a6",
  inputBgColor: "#FFFFFF",
  inputFontColor: "#333333",
  inputIconColor: "#757575",
  inputHoverBgColor: "#EEEEEE",
  btnBgColor: "#EEEEEE",
  btnFontSize: "12px",
  btnFontWeight: "400",
  btnLetterSpacing: "0.05em",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box ;
}
a{
    text-decoration:none ;
    color:${props => props.theme.fontColor};
}
body{
  background-color:${props => props.theme.bgColor};
  color:${props => props.theme.fontColor};
  font-family: 'MuseoModerno', cursive;
  height:100%;
}
`;
