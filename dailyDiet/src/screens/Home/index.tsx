import * as S from "./styles";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { mealGetAll } from "../../Storage/mealGetAll";
import { MealStorageDTO } from "../../Storage/MealStorageDTO";

import { FlatList } from "react-native";
import { useCallback, useState } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";


export function Home() {
  const [Groups, setGroups] = useState<string[]>([])
  const [mealGroups, setMealGroups] = useState<MealStorageDTO[]>([]);

  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("mealStatisticsDetails");
  }

  function handleDescriptionMeal(name: string) {
    navigation.navigate("descriptionMeal", {name});
  }

  async function handleNewMeal() {

    navigation.navigate("newMeal");
  }

  async function fetchMeals() {
    const mealDiet = await mealGetAll()

    setMealGroups(mealDiet)
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()

  },[]))
  return (
    <S.Container>
      <HomeHeader />
      <BoxDiet title="90%" typeColor="POSITIVE" onPress={handleDetails} />

      <S.SubTitle>Refeições</S.SubTitle>
      <Button
        title="Novas Refeições"
        buttonType="PRIMARY"
        titleType="PRIMARY"
        showIcon
        iconType="PRIMARY"
        onPress={handleNewMeal}
      />

      <S.ContainerDataTitle>
        <S.DateTitle>12.08.2023</S.DateTitle>
      </S.ContainerDataTitle>

      <FlatList
        data={mealGroups}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealCard onPress={() => handleDescriptionMeal(item.name)} hour="20:00" title={item.name} circleStatusType={item.dietGroup === 'Sim' ? 'POSITIVE': 'NEGATIVE'} />
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
