import { ShoppingCart, Trash } from "phosphor-react";
import { ButtonCartCoffeeBox, ButtonDefault, ButtonPrimary, ButtonSecondary } from "./styles";
import { ButtonVariant } from "./types";

interface ButtonProps {
  buttonVariant: ButtonVariant;
  content?: string;
}

export function Button({ buttonVariant, content }: ButtonProps) {
  switch (buttonVariant) {
    case "buttonPrimary":
      return (
        <ButtonPrimary>
          <p>{content}</p>
        </ButtonPrimary>
      );
    case "buttonSecondary":
      return (
        <ButtonSecondary title="remover do carrinho">
          <Trash size={16} />
          <p>remover</p>
        </ButtonSecondary>
      );
    case "buttonCartCoffeeBox":
      return (
        <ButtonCartCoffeeBox title="adicionar ao carrinho">
          <ShoppingCart size={22} weight="fill" />
        </ButtonCartCoffeeBox>
      );
      default:
        return(
          <ButtonDefault />
        )
  }
}
