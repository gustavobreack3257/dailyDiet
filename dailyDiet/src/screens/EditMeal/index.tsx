import * as S from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { MealGroupFilterButton } from "@components/MealGroupFilterButton";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

export function EditMeal() {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  function handleFeedBackMeal(){
    navigation.navigate('feedBackMeal')
  }
  return (
    <S.Container>
      <Header title="Editar refeição" onPress={handleGoBack}/>

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
        <MealGroupFilterButton title="Sim" type='PRIMARY' />
        <MealGroupFilterButton title="Não" type='SECONDARY' />
        </S.ContainerSelectData>

        <Button title="Salvar alterações" onPress={handleFeedBackMeal}/>
      </S.ContainerBody>
    </S.Container>
  );
}
