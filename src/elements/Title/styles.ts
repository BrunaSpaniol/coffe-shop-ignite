import styled from "styled-components";
import type { TextColor, TitleVariant, TitleWeight } from "./types";

interface TextComponentProps {
  variant: TitleVariant;
  fontWeight: TitleWeight;
  textColor: TextColor;
}

export const TitleComponent = styled.h1<TextComponentProps>`
  font-family: "Baloo 2", cursive;
  line-height: 130%;
  font-size: ${({ theme, variant }) => theme.titleVariants?.[variant]};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeight?.[fontWeight]};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
`;
