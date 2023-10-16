import { Minus, Plus } from "phosphor-react";
import { QuantityCounter } from "./styles";

interface CounterInputProps {
  quantity: number;
}

export function CounterInput({ quantity }: CounterInputProps) {
  return (
    <QuantityCounter>
      <Plus size={14} weight="bold" />
      <p>{quantity}</p>
      <Minus size={14} weight="bold" />
    </QuantityCounter>
  );
}
