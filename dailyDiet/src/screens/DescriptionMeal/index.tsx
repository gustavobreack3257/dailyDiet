import * as S from "./styles";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { MealStorageDTO } from "../../Storage/MealStorageDTO";
import { mealGetAll } from "../../Storage/mealGetAll";
import { removeMeal } from "../../Storage/removeMeal";

import { Header } from "@components/Header";
import { StatusDiet } from "@components/StatusDiet";
import { Button } from "@components/Button";

import { useCallback, useState } from "react";


type Props = {
  type?: S.SelectColorTypeProps;
};

type RouteParams ={
  name: string
}
export function DescriptionMeal({ type = null }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  const [mealDetail, setMealDetail] = useState<MealStorageDTO>({} as MealStorageDTO)
  const {name} = route.params as RouteParams;

  console.log("Route", name);

  function handleToReturnHome() {
    navigation.navigate("home");
  }
  function handleToEditMeal() {
    navigation.navigate("editMeal");
  }

  async function fetchMeal() {
    const mealDiet = await mealGetAll()
    const findMeal = mealDiet.find(meal => meal.name === name)
    if(findMeal){
      setMealDetail(findMeal)
    }
  }

  async function handleMealRemove (mealName: string) {
    try {
      await removeMeal(mealName)
      fetchMeal()

      navigation.navigate('home')
    } catch (error) {

    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()

  },[]))
  console.log('mealDetail', mealDetail)

  return (
    <S.Container type={mealDetail.dietGroup === 'Sim' ? 'PRIMARY': 'SECONDARY'}>
      <Header onPress={handleToReturnHome} title="Refeições" />
      <S.ContainerBody>
        <S.ContainerElements>
          <S.ContainerTextMeal>
            <S.Title>{name}</S.Title>
            <S.SubTitle>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </S.SubTitle>
          </S.ContainerTextMeal>

          <S.ContainerDescriptionText>
            <S.TitleDataAndHour>Data e hora</S.TitleDataAndHour>
            <S.SubTitleDataAndHour>12/08/2022 às 16:00</S.SubTitleDataAndHour>
          </S.ContainerDescriptionText>

          <StatusDiet statusCircleType={mealDetail.dietGroup === 'Sim' ? 'POSITIVE': 'NEGATIVE'} title="dentro da dieta" />
        </S.ContainerElements>

        <Button
          showIcon
          iconType="SECONDARY"
          title="Editar refeição"
          onPress={handleToEditMeal}
        />
        <Button
          buttonType="SECONDARY"
          titleType="SECONDARY"
          showIcon
          iconType="TERTIARY"
          title="Excluir refeição"
          onPress={() => handleMealRemove(mealDetail.name)}
        />
      </S.ContainerBody>
    </S.Container>
  );
}
