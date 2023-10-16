import styled from "styled-components";
import type { TextColor, TextLineHeight, TextVariant, TextWeight } from "./types";

interface TextComponentProps {
  variant: TextVariant;
  lineHeight: TextLineHeight;
  fontWeight: TextWeight;
  textColor: TextColor
}

export const TextComponent = styled.p<TextComponentProps>`
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: ${({ theme, variant }) => theme.textVariants?.[variant]};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeight?.[fontWeight]};
  line-height: ${({ theme, lineHeight }) => theme.lineHeights?.[lineHeight]};
  color: ${({theme, textColor}) => theme.colors[textColor]}
`;
