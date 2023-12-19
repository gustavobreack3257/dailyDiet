import * as S from "./styles";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { mealGetAll } from "../../Storage/mealGetAll";
import { MealItemStorageDTO } from "../../Storage/MealStorageDTO";

import { Alert, FlatList } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";
import { MealGroupCard } from "@components/MealGroupCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const [percentage, setPercentage] = useState<string>('');
  const [mealGroups, setMealGroups] = useState<MealItemStorageDTO[]>([]);

  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("mealStatisticsDetails", {percentage});
  }

  function handleDescriptionMeal(id: string, date: string) {
    navigation.navigate("descriptionMeal", { id, date });
  }

  async function totalPercentageOfMealsWithinTheDiet() {
    try {
      const fetchMeals = await mealGetAll();
      const mealsFoundByDate = fetchMeals.filter((item) => item.date);

      const mealsFoundByContent = mealsFoundByDate.map((item) =>
        item.content.map((item) => item.dietGroup)
      );

      const unifiedArray = mealsFoundByContent.flat();
      const totalMeals = unifiedArray.length;

      const quantityOfYes = unifiedArray.filter((item) => item === "Sim");
      const totalAmountOfYes = quantityOfYes.length;

      const percentage = (totalAmountOfYes / totalMeals) * 100;

      const roundedPercentage = JSON.stringify(Math.round(percentage * 10) / 10)
      return setPercentage(roundedPercentage)
    } catch (error) {
      Alert.alert(
        "Erro!",
        "Não foi possível obter o resultado total das refeições, tente novamente mais tarde."
      );
    }
  }

  async function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  async function fetchMeals() {
    const mealDiet = await mealGetAll();

    setMealGroups(mealDiet);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      totalPercentageOfMealsWithinTheDiet();
    }, [])
  );


  return (
    <S.Container>
      <HomeHeader />
      <BoxDiet title={mealGroups.length > 0 ? percentage + '%': '0' + '%'} typeColor={ Number(percentage) >= 50 ? 'POSITIVE': 'NEGATIVE'} onPress={handleDetails} />

      <S.SubTitle>Refeições</S.SubTitle>
      <Button
        title="Novas Refeições"
        buttonType="PRIMARY"
        titleType="PRIMARY"
        showIcon
        iconType="PRIMARY"
        onPress={handleNewMeal}
      />

      <FlatList
        data={mealGroups}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <MealGroupCard
            onNavigateDetails={handleDescriptionMeal}
            item={item}
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 50 },
          mealGroups.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal adicionar uma refeição a sua dieta?" />
        )}
      />
    </S.Container>
  );
}
