import styled from "styled-components";

export const ShoppingBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2.28rem;
  width: 100%;

  & h1 {
    margin-right: auto;
    color: ${(props) => props.theme.colors.baseText};
    font-family: "Baloo 2", cursive;
    font-size: ${(props) => props.theme.fontSize.titleMedium};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    line-height: 130%;
  }

  & h1::before {
    content: "R$ ";

    color: ${(props) => props.theme.colors.baseText};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.textRegular};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 130%;
  }
`;
