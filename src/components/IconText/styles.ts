import styled from "styled-components";

export const IconTextContainer = styled.li`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;

  > p {
    text-decoration: none;
    list-style-type: none;

    color: ${(props) => props.theme.colors.baseText};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.textLarge};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 130%;
  }
`;
