import * as S from "./styles";

import { useNavigation } from "@react-navigation/native";

import { HomeHeader } from "@components/HomeHeader";
import { BoxDiet } from "@components/BoxDiet";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export function Home() {
  const navigation = useNavigation();

  function handleDetails(){
    navigation.navigate('mealStatisticsDetails')
  }

  function handleNewMeal(){
    navigation.navigate('newMeal')
  }
  return (
    <S.Container>
      <HomeHeader />
      <BoxDiet title="90%" onPress={handleDetails}/>
      <S.SubTitle>Refeições</S.SubTitle>
      <Button title="Novas Refeições" onPress={handleNewMeal}/>

      <S.ContainerDataTitle>
        <S.DateTitle>12.08.2023</S.DateTitle>
      </S.ContainerDataTitle>

      <MealCard title="X-Tudo" type="SECONDARY"/>
      <MealCard title="Salada cesar com frango..." type="PRIMARY"/>
    </S.Container>
  );
}
