import { NavLink } from "react-router-dom";

import { ShoppingCart, MapPin } from "phosphor-react";

import logoCoffeShop from "../../assets/Logo.svg";

import { HeaderContainer, NavContainer, LocalizationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Shop">
        <img src={logoCoffeShop} alt="" />
      </NavLink>

      <NavContainer>
        <a href="">
          <LocalizationContainer>
            <MapPin size={22} weight="fill" />

            <p>Salvador, BA </p>
          </LocalizationContainer>
        </a>

        <NavLink to="/checkout" title="Carrinho de Compras">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}
