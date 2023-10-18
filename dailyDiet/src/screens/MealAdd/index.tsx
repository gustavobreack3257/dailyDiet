import * as S from "./styles";
import { Header } from "@components/HeaderApplication";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { SelectDiet } from "@components/SelectDiet";
import { Button } from "@components/Button";
export function MealAdd() {
  return (
    <S.Container>
      <Header title="Nova refeição" />

      <S.ContainerBody>
        <Title title="Name" />
        <Input />

        <Title title="Descrição" />
        <DescriptionInput />

        <S.ContainerInputData>
          <InputData title="Data"/>

          <InputData title="Hora"/>
        </S.ContainerInputData>

        <Title title="Está dentro da dieta?"/>

        <S.ContainerSelectData>
        <SelectDiet type="PRIMARY" title="Sim" />
        <SelectDiet type="SECONDARY" title="Sim" />
        </S.ContainerSelectData>

        <Button />
      </S.ContainerBody>
    </S.Container>
  );
}
