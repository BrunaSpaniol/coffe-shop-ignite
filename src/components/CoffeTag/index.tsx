import { CoffeTagContainer } from "./styles";

interface CoffeTagProps {
  content: string;
}

export function CoffeTag({ content }: CoffeTagProps) {
  return (
    <CoffeTagContainer>
      <p>{content}</p>
    </CoffeTagContainer>
  );
}
