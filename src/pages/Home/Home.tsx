import { PromotionDisplay } from "./PromotionDisplay";
import { CoffeCard } from "../../components/CoffeCard";
import { HomeContainer, CoffeCardContainer } from "./styles";
import { Title } from "../../elements/Title";

export function Home() {
  return (
    <HomeContainer>
      <PromotionDisplay />
      <CoffeCardContainer>
        <Title
          variant={"titleL"}
          fontWeight={"extraBold"}
          content="Nossos cafés"
          textColor={"baseSubtitle"}
        />

        <CoffeCard />
      </CoffeCardContainer>
    </HomeContainer>
  );
}
