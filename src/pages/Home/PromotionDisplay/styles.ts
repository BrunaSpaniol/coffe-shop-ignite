import styled from "styled-components";
import background from "../../../assets/Background.svg";

export const DisplayContainer = styled.header`
  padding: 5.75rem 10rem;
  display: grid;
  grid-template-columns: 36.75rem 29.75rem;

  column-gap: 3.5rem;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-blend-mode: blur(80px);
  background-position: center;
  object-fit: cover;

  img {
    margin: 0 0;
  }
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  text-decoration: none;

  margin-bottom: 4.12rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.baseTitle};
  font-family: "Baloo 2", monospace;
  font-size: 3rem;
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  line-height: 3.9rem;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.fontSize.textExtraLarge};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 1.625rem;
  text-align: justify;
`;

export const ListArgsContainer = styled.ul`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.94rem 2.5rem;

  li {
    text-decoration: none;
    list-style-type: none;

    color: ${(props) => props.theme.colors.baseText};
    font-family: ${(props) => props.theme.fontFamily.text}, sans-serif;
    font-size: ${(props) => props.theme.fontSize.textLarge};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 1.625rem;
  }
`;
