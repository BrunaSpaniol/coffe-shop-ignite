import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90rem;
  max-width: 90rem;

  padding: 2rem 10rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
    border-radius: 0.375rem;

    text-decoration: none;
    background-color: ${(props) => props.theme.colors.yellowLight};

    line-height: 0;
    color: ${(props) => props.theme.colors.yellowDark};

    &:first-child {
      background-color: ${(props) => props.theme.colors.purpleLight};
    }

    /* &:hover{

    }

    &.active{
      color:
    } */
  }
`;

export const LocalizationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme.colors.purpleDark};
  font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
  font-size: ${(props) => props.theme.fontSize.textRegular};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 130%;
`;
