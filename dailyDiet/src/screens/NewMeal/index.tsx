import * as S from "./styles";

import { Alert, FlatList } from "react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { MealGroupFilterButton } from "@components/MealGroupFilterButton";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { addingNewMeal } from "../../Storage/addingNewMeal";
import { mealGetAll } from "../../Storage/mealGetAll";
import { AppError } from "@utils/AppError";

export function NewMeal() {
  const [newMealName, setNewMealName] = useState("");
  const [filterGroup, setFilterGroup] = useState("");
  const [input, setInput] = useState(["Data", "Hora"]);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNewAddMeal() {
    try {
      if (newMealName.trim().length === 0) {
        return Alert.alert(
          "Nova refeição",
          "Informe o nome da refeição para adicionar."
        );
      }

      const newMeal = {
        name: newMealName,
        dietGroup: filterGroup,
      };
      try {
        if(newMeal.dietGroup.length === 0){
          return Alert.alert('Ops!', 'Você deve selecionar o filtro se está dentro da dieta ou não.')
        }
        await addingNewMeal(newMeal);

        navigation.navigate('feedBackMeal', {filterGroup})

      } catch (error) {
        if (error instanceof AppError) {
          Alert.alert("Nova refeição", error.message);
        } else {
          console.log(error);
          Alert.alert("Nova refeição", "Não foi possível adicionar");
        }
      }

      console.log(filterGroup);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Header title="Nova refeição" onPress={handleGoBack} />

      <S.ContainerBody>
        <Title title="Name" />
        <Input
          placeholder="Digite o nome da refeição"
          onChangeText={setNewMealName}
        />

        <Title title="Descrição" />
        <DescriptionInput />

        <S.ContainerInputData>
          <FlatList
            data={input}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <InputData title={item} />}
            horizontal
          />
        </S.ContainerInputData>

        <Title title="Está dentro da dieta?" />

        <FlatList
          data={["Sim", "Não"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <MealGroupFilterButton
              title={item}
              isActive={item === filterGroup}
              onPress={() => setFilterGroup(item)}
              type={item === "Sim" ? "PRIMARY" : "SECONDARY"}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Button title="Cadastrar refeição" onPress={handleNewAddMeal} />
      </S.ContainerBody>
    </S.Container>
  );
}
