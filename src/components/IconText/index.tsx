import { Icon } from "../../elements/Icon";
import { IconTextContainer } from "./styles";

interface IconTextProps {
  content: string;
  icon: "ShoppingCart" | "Clock" | "Package" | "Coffee";
  color: "yellowDark" | "yellowDefault" | "baseText" | "purpleDefault";
}

export function IconText({ content, icon, color }: IconTextProps) {
  return (
    <IconTextContainer>
      <Icon icon={icon} color={color} />
      <p>{content}</p>
    </IconTextContainer>
  );
}
