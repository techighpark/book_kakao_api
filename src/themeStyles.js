import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "black",
  fontColor: "gray",
};

export const lightMode = {
  bgColor: "gray",
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
    width:100%;
    min-width:400px;
    background-color:${props => props.theme.bgColor};
    color:${props => props.theme.fontColor};
}
`;
