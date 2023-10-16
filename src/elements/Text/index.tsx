import { TextComponent } from "./styles";
import { TextColor, TextLineHeight, TextVariant, TextWeight } from "./types";

interface TextProps {
  variant: TextVariant;
  lineHeight?: TextLineHeight;
  fontWeight: TextWeight;
  content: string;
  textColor: TextColor;
}

export function Text({
  variant,
  lineHeight = "text",
  fontWeight,
  content,
  textColor,
}: TextProps) {
  return (
    <TextComponent
      variant={variant}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {content}
    </TextComponent>
  );
}
