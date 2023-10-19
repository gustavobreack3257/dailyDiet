import { Button } from "@components/Button";
import * as S from "./styles";
import PositiveSvg from "@assets/PositiveIllustration.svg";

export function MealFeedback() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Continue assim!</S.Title>

        <S.SubTitle>
          Você continua<S.SubTitleBold> dentro da dieta.</S.SubTitleBold> Muito
          bem!
        </S.SubTitle>
      </S.ContainerTitle>

      <S.ContainerImage>
        <PositiveSvg />
      </S.ContainerImage>

      <S.ContainerButton>
        <Button/>
      </S.ContainerButton>
    </S.Container>
  );
}
