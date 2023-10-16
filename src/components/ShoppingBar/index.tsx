import {
  ShoppingBarContainer,
} from "./styles";
import { CartButton } from "../../elements/Button/CartButton";
import { CounterInput } from "../CounterInput";

interface ShoppingBarProps{
  coffeValue: string;
}
export function ShoppingBar({coffeValue}: ShoppingBarProps) {
  return (
    <ShoppingBarContainer>
      <h1>{coffeValue}</h1>

      <CounterInput quantity={1} />

      <CartButton />

    </ShoppingBarContainer>
  );
}
