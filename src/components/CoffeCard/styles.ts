import styled from "styled-components";

export const CoffeCardContainer = styled.section`
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.5rem 1.47rem 1.5rem;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme.colors.baseCard};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CoffeImage = styled.img`
  z-index: 3;
  margin-top: -1.25rem;
`;
