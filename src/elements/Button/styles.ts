import styled from "styled-components";


export const ButtonDefault = styled.button`
  text-decoration: none;
  margin: 0;
  border: transparent;
  cursor: pointer;
  border-radius: 0.375rem;
  text-transform: uppercase;
  line-height: 160%;
  font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    color 0.1s,
    background-color 0.1s;
`;

export const ButtonPrimary = styled(ButtonDefault)`
  width: 8.25rem;
  padding: 0.75rem 0.5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.buttonG};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.yellowLight};

  & svg {
    line-height: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }
`;

export const ButtonSecondary = styled(ButtonDefault)`
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.baseButton};
  padding: 0rem 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.buttonM};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.baseText};

  justify-content: space-between;

  & svg {
    color: ${({ theme }) => theme.colors.purpleDefault};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }
`;

export const ButtonCartCoffeeBox = styled(ButtonDefault)`
  margin: 0;
  border: transparent;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.purpleDark};

  :hover {
    background-color: ${({ theme }) => theme.colors.purpleDefault};
  }
`;

export const ButtonCartHeader = styled(ButtonDefault)`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellowLight};

  color: ${({ theme }) => theme.colors.yellowDark};
`;

export const ButtonSelect = styled(ButtonSecondary)`
  width: 11.16669rem;
  padding: 1rem;
`;
