import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.baseText};
    --webkit-font-smoothing: antialiased;

    overflow-x: hidden;

}

border-style, input, textarea, button{
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: ${(props) => props.theme.fontSize.textLarge};
    line-height: '130%';
}

:focus {
    outline: 0;
    box-shadow: 1px solid ${(props) => props.theme.colors.yellowDark};
}`;
