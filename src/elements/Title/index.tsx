import { TitleComponent } from "./styles";
import { TitleVariant, TitleWeight, TextColor } from "./types";

interface TitleProps {
  variant: TitleVariant;
  fontWeight: TitleWeight;
  textColor:TextColor;
  content: string;
}

export function Title({
  variant,
  fontWeight,
  content,
  textColor,
}: TitleProps) {
  return (
    <TitleComponent
      variant={variant}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {content}
    </TitleComponent>
  );
}
