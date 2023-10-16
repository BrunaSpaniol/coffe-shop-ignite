import { CoffeDescriptionContainer } from "./styles";

interface CoffeDescriptionProps{
  title: string;
  description: string
}

export function CoffeDescription({title, description}: CoffeDescriptionProps){
  return(
    <CoffeDescriptionContainer>
        <h1>{title}</h1>

        <p>{description}</p>
      </CoffeDescriptionContainer>
  )
}