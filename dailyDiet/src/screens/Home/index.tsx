import * as S from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <BoxDiet />
      <S.SubTitle>Refeições</S.SubTitle>
      <Button />

      <S.ContainerDataTitle>
        <S.DateTitle>12.08.2023</S.DateTitle>
      </S.ContainerDataTitle>

      <Input title="X-Tudo" />
    </S.Container>
  );
}
