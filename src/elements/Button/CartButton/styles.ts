import styled from "styled-components";

export const AddToCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin: 0;
  border: transparent;
  cursor: pointer;

  text-decoration: none;
  background-color: ${(props) => props.theme.colors.purpleDark};

  line-height: 0;
  color: ${(props) => props.theme.colors.baseCard};

  transition:
    color 0.1s,
    background-color 0.1s;

  &:hover{
    background-color: ${({ theme }) => theme.colors.purpleDefault};
  }
`;