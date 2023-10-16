import styled from "styled-components";

export const CoffeDescriptionContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 0.5rem;

  & h1 {
    color: ${(props) => props.theme.colors.baseSubtitle};
    font-family: "Baloo 2", cursive;
    font-size: ${(props) => props.theme.fontSize.textExtraLarge};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 1.625rem;
  }
  & p {
    color: ${(props) => props.theme.colors.baseLabel};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.textRegular};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 1.1375rem;
    text-align: center;
  }
`;
