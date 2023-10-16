import displayImage from "../../../assets/Imagem.svg";
import { IconText } from "../../../components/IconText";
import {
  DisplayContainer,
  Title,
  SubTitle,
  TitleContainer,
  ListArgsContainer,
} from "./styles";

// interface PromotionsDisplayProps {
//   title: string;
//   subTitle: string;
//   argsList: string[];
// }

export function PromotionDisplay() {
  return (
    <DisplayContainer>
      <article>
        <TitleContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
        </TitleContainer>

        <ListArgsContainer>
          <IconText
            content={"Compra simples e segura"}
            icon={"ShoppingCart"}
            color={"yellowDark"}
          />
          <IconText
            content={"Entrega rápida e rastreada"}
            icon={"Clock"}
            color={"yellowDefault"}
          />
          <IconText
            content={"Embalagem mantém o café intacto"}
            icon={"Package"}
            color={"baseText"}
          />
          <IconText
            content={"O café chega fresquinho até você"}
            icon={"Coffee"}
            color={"purpleDefault"}
          />
        </ListArgsContainer>
      </article>

      <img
        src={displayImage}
        alt="Copo cheio de café com grãos de café ao redor"
      />
    </DisplayContainer>
  );
}
