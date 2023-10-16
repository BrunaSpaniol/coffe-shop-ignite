import styled from "styled-components";
import { COLORS_DEFAULT } from "../../styles/themes/default";

interface IconProps {
  color: keyof typeof COLORS_DEFAULT;
}

export const IconContainer = styled.div<IconProps>`
  color: ${({ theme }) => theme.colors.background};
  line-height: 0;
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: 0.5rem;
  border-radius: 99.999%;
  border: transparent;
`