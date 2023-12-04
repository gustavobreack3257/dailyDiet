import * as S from "./styles";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { MealDTO } from "../../Storage/MealStorageDTO";
import { mealGetAll } from "../../Storage/mealGetAll";
import { removeMeal } from "../../Storage/removeMeal";

import { Header } from "@components/Header";
import { StatusDiet } from "@components/StatusDiet";
import { Button } from "@components/Button";

import{CustomAlert} from '@components/Modal'

import { useCallback, useState } from "react";

type Props = {
  type?: S.SelectColorTypeProps;
};

type RouteParams = {
  id: string;
  date: string;
};
export function DescriptionMeal({ type = null }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  const [mealDetail, setMealDetail] = useState<MealDTO>({} as MealDTO);
  const { id, date } = route.params as RouteParams;
  const [isDialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  function handleToReturnHome() {
    navigation.navigate("home");
  }

  function handleToEditMeal() {
    navigation.navigate("editMeal", { id, date });
  }

  async function fetchMeal() {
    const mealDiet = await mealGetAll();
    const findMeal = mealDiet.find((meal) => meal.date === date);
    if (findMeal) {
      const meal = findMeal.content.find((item) => item.id === id);
      if (meal) {
        setMealDetail(meal);
      }
    }
  }

  async function handleMealRemove() {
    try {
      await removeMeal(id, date);
      fetchMeal();

      navigation.navigate("home");
    } catch (error) {
      console.log("Remover refeição?", "Não foi possível remover a refeição");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );


  return (
    <S.Container
      type={mealDetail.dietGroup === "Sim" ? "PRIMARY" : "SECONDARY"}
    >
      <Header onPress={handleToReturnHome} title="Refeições" />
      <S.ContainerBody>
        <S.ContainerElements>
          <S.ContainerTextMeal>
            <S.Title>{mealDetail.name}</S.Title>
            <S.SubTitle>{mealDetail.description}</S.SubTitle>
          </S.ContainerTextMeal>

          <S.ContainerDescriptionText>
            <S.TitleDataAndHour>Data e hora</S.TitleDataAndHour>
            <S.SubTitleDataAndHour>
              {date} às {mealDetail.hour}h
            </S.SubTitleDataAndHour>
          </S.ContainerDescriptionText>

          <StatusDiet
            statusCircleType={
              mealDetail.dietGroup === "Sim" ? "POSITIVE" : "NEGATIVE"
            }
            title={
              mealDetail.dietGroup === "Sim"
                ? "dentro da dieta"
                : "fora da dieta"
            }
          />
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
          onPress={showDialog}
        />

        <CustomAlert visible={isDialogVisible} onClose={hideDialog} onRemove={handleMealRemove}/>
      </S.ContainerBody>
    </S.Container>
  );
}
