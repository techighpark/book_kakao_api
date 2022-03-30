import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "black",
  fontColor: "white",
};

export const lightMode = {
  bgColor: "white",
  fontColor: "black",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box ;
}
a{
    text-decoration:none ;
}
body{
    background-color:${props => props.theme.bgColor} ;
    color:${props => props.theme.fontColor} ;
}
`;
