import { ShoppingCart } from "phosphor-react";
import { AddToCartButton } from "./styles";

export function CartButton() {
  return (
    <AddToCartButton title="ver carrinho de compras">
      <ShoppingCart size={22} weight="fill" />
    </AddToCartButton>
  );
}
