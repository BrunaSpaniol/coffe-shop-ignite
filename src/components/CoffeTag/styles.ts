import styled from "styled-components";

export const CoffeTagContainer = styled.div`
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.colors.yellowLight};
  border-radius: 6.25rem;

  & p {
    color: ${(props) => props.theme.colors.yellowDark};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.tag};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 0.8125rem;
    text-transform: uppercase;
  }
`;