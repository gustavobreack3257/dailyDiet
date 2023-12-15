import * as S from "./styles";

import { StatBox } from "@components/StatBox";
import { HeaderDetails } from "@components/HeaderDetails";
import { StatisticResult } from "@components/StatisticResult";

import { useNavigation, useRoute } from "@react-navigation/native";

import { MealItemStorageDTO } from "../../Storage/MealStorageDTO";
import { useEffect, useState } from "react";
import { mealGetAll } from "../../Storage/mealGetAll";
import { Alert } from "react-native";

type RouteParamsProps = {
  percentage: string;
};

export function MealStatisticsDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const [totalMealSequence, setTotalMealSequence] =
  useState(0);
  const [totalAmountOfNoDailyDiet, setTotalAmountOfNoDailyDiet] =
    useState<string>("");
  const [totalAmountOfYesDailyDiet, setTotalAmountOfYesDailyDiet] =
    useState<string>("");
  const [totalMealsRecordedDailyDiet, setTotalMealsRecordedDailyDiet] =
    useState<string>("");
  const [mealGroups, setMealGroups] = useState<MealItemStorageDTO[]>([]);
  const { percentage } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  function countDietGroup(arr: any): number {

    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr[i].content.length; j++) {

            if (arr[i].content[j].dietGroup === "Sim") {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}


  async function totalMealsRecorded() {
    try {
      const fetchMeals = await mealGetAll();
      const totalSequence = countDietGroup(fetchMeals)
      setTotalMealSequence(totalSequence)
      const mealsFoundByDate = fetchMeals.filter((item) => item.date);

      const mealsFoundByContent = mealsFoundByDate.map((item) =>
        item.content.map((item) => item.id)
      );

      const unifiedArray = mealsFoundByContent.flat();

      const totalMeals = unifiedArray.length;
      const totalMealsString = JSON.stringify(totalMeals);
      setTotalMealsRecordedDailyDiet(totalMealsString);

      const mealsFoundByContentDietGroup = mealsFoundByDate.map((item) =>
        item.content.map((item) => item.dietGroup)
      );
      const unifiedArrayDietGroup = mealsFoundByContentDietGroup.flat();
      const quantityOfYes = unifiedArrayDietGroup.filter(
        (item) => item === "Sim"
      );
      const totalAmountOfYes = quantityOfYes.length;

      const totalAmountOfYesString = JSON.stringify(totalAmountOfYes);
      setTotalAmountOfYesDailyDiet(totalAmountOfYesString);

      const quantityOfNo = unifiedArrayDietGroup.filter(
        (item) => item === "Não"
      );
      const totalAmountOfNo = quantityOfNo.length;
      const totalAmountOfNoString = JSON.stringify(totalAmountOfNo);
      setTotalAmountOfNoDailyDiet(totalAmountOfNoString);
    } catch (error) {
      Alert.alert(
        "Erro!",
        "Não foi possível obter o resultado total das refeições, tente novamente mais tarde."
      );
    }
  }

  useEffect(() => {
    totalMealsRecorded();
  }, []);

  return (
    <S.Container type={Number(percentage) >= 50 ? "POSITIVE" : "NEGATIVE"}>
      <HeaderDetails type={Number(percentage) >= 50 ? "POSITIVE" : "NEGATIVE"} title={percentage + "%"} onPress={handleGoBack} />

      <S.ContainerBody>
        <S.Describe>Estatísticas gerais</S.Describe>

        <S.ContainerElements>
          <StatBox
            title={String(totalMealSequence)}
            subTitle="Melhor sequência de pratos dentro da dieta"
          />

          <StatBox
            title={totalMealsRecordedDailyDiet}
            subTitle="refeições registradas"
          />

          <S.ContainerStatistic>
            <StatisticResult
              type="POSITIVE"
              title={totalAmountOfYesDailyDiet}
              subTitle="refeições dentro da dieta"
            />

            <StatisticResult
              type="NEGATIVE"
              title={totalAmountOfNoDailyDiet}
              subTitle="refeições fora da dieta"
            />
          </S.ContainerStatistic>
        </S.ContainerElements>
      </S.ContainerBody>
    </S.Container>
  );
}
