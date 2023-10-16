import React from "react";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { IconContainer } from "./styles";

interface IconProps {
  icon: "ShoppingCart" | "Clock" | "Package" | "Coffee";
  color: "yellowDark" | "yellowDefault" | "baseText" | "purpleDefault";
  size?: number;
  weight?: string;
}

export function Icon({ icon, color, size = 16, weight = "fill" }: IconProps) {
  const iconComponents = {
    ShoppingCart: <ShoppingCart />,
    Clock: <Clock />,
    Package: <Package />,
    Coffee: <Coffee />,
  };

  function renderIcon() {
    const iconComponent = iconComponents[icon];
    return React.cloneElement(iconComponent, { size, weight });
  }

  return <IconContainer color={color}>{renderIcon()}</IconContainer>;
}
