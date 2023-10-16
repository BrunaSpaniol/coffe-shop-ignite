import styled from "styled-components";

export const QuantityCounter = styled.div`
  padding: 0.5rem;
  margin-right: 0.5rem;

  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 0.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.25rem;

  > p {
    color: ${(props) => props.theme.colors.baseTitle};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.textLarge};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 130%;
  }
  > svg {
    color: ${(props) => props.theme.colors.purpleDefault};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.purpleDark};
    }
  }
`;
