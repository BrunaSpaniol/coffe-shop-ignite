import { ShoppingBar } from "../ShoppingBar";
import { CoffeTag } from "../CoffeTag";
import { CoffeDescription } from "../CoffeDescription";

import traditionalCoffee from "../../assets/tradicional.svg";

import { CoffeCardContainer, CoffeImage } from "./styles";

export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <CoffeImage src={traditionalCoffee} alt="" />

      <CoffeTag content="tradicional" />

      <CoffeDescription
        title="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
      />

      <ShoppingBar coffeValue="9.90" />
    </CoffeCardContainer>
  );
}
