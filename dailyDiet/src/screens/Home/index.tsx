import * as S from "./styles";

import { useNavigation } from "@react-navigation/native";

import { FlatList } from "react-native";
import { useState } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";

export function Home() {
  const [mealGroups, setMealGroups] = useState<string[]>(['X-tudo', 'Salada cesar com frango'])
  const navigation = useNavigation();

  function handleDetails(){
    navigation.navigate('mealStatisticsDetails')
  }

  function handleNewMeal(){
    navigation.navigate('newMeal')
  }
  function handleDescriptionMeal(){
    navigation.navigate('descriptionMeal')
  }
  return (
    <S.Container>
      <HomeHeader />
      <BoxDiet title="90%" typeColor="POSITIVE" onPress={handleDetails}/>

      <S.SubTitle>Refeições</S.SubTitle>
      <Button title="Novas Refeições" buttonType="PRIMARY" titleType='PRIMARY' showIcon iconType="PRIMARY" onPress={handleNewMeal}/>

      <S.ContainerDataTitle>
        <S.DateTitle>12.08.2023</S.DateTitle>
      </S.ContainerDataTitle>

      <FlatList
      data={mealGroups}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <MealCard onPress={handleDescriptionMeal} title={item} />
      )}
      contentContainerStyle={mealGroups.length === 0 && {flex: 1}}
      ListEmptyComponent={() => <ListEmpty message="Que tal adicionar uma refeição a sua dieta?"/>}
      />

    </S.Container>
  );
}
