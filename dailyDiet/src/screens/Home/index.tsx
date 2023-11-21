import * as S from "./styles";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { FlatList } from "react-native";
import { useCallback, useState } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";

export function Home() {
  const [Groups, setGroups] = useState<string[]>([])
  const [mealGroups, setMealGroups] = useState<string[]>([
    "X-tudo",
    "Salada cesar com frango",
    "X-bacon",
  ]);

  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("mealStatisticsDetails");
  }

  function handleDescriptionMeal() {
    navigation.navigate("descriptionMeal");
  }

  async function handleNewMeal() {

    navigation.navigate("newMeal");
  }


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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MealCard onPress={handleDescriptionMeal} hour="20:00" title={item} />
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
