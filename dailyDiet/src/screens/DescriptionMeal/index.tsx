import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { StatusDiet } from "@components/StatusDiet";
import { Button } from "@components/Button";

type Props = {
  type?: S.SelectColorTypeProps;
};
export function DescriptionMeal({ type = null }: Props) {
  const navigation = useNavigation();

  function handleToReturnHome() {
    navigation.navigate("home");
  }
  function handleToEditMeal() {
    navigation.navigate("editMeal");
  }
  return (
    <S.Container type={type}>
      <Header onPress={handleToReturnHome} title="Refeições" />
      <S.ContainerBody>
        <S.ContainerElements>
          <S.ContainerTextMeal>
            <S.Title>Sanduíche</S.Title>
            <S.SubTitle>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </S.SubTitle>
          </S.ContainerTextMeal>

          <S.ContainerDescriptionText>
            <S.TitleDataAndHour>Data e hora</S.TitleDataAndHour>
            <S.SubTitleDataAndHour>12/08/2022 às 16:00</S.SubTitleDataAndHour>
          </S.ContainerDescriptionText>

          <StatusDiet title="dentro da dieta" />
        </S.ContainerElements>

        <Button showIcon iconType="SECONDARY" title="Editar refeição" onPress={handleToEditMeal} />
        <Button
          buttonType="SECONDARY"
          titleType="SECONDARY"
          showIcon
          iconType="TERTIARY"
          title="Excluir refeição"
        />
      </S.ContainerBody>
    </S.Container>
  );
}
