import * as S from "./styles";

import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { MealGroupFilterButton } from "@components/MealGroupFilterButton";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewMeal() {
  const [filter, setFilter] = useState("Sim");
  const [typeFilter, setTypeFilter] = useState(["PRIMARY", "SECONDARY"]);
  const [input, setInput] = useState(["Data", "Hora"]);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  function handleFeedBackMeal() {
    navigation.navigate("feedBackMeal");
  }
  return (
    <S.Container>
      <Header title="Nova refeição" onPress={handleGoBack} />

      <S.ContainerBody>
        <Title title="Name" />
        <Input placeholder="Digite seu nome completo" />

        <Title title="Descrição" />
        <DescriptionInput />

        <S.ContainerInputData>
        <FlatList
          data={input}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <InputData title={item}
          />}
          horizontal
        />
        </S.ContainerInputData>

        <Title title="Está dentro da dieta?" />

        <FlatList
          data={['Sim', 'Não']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <MealGroupFilterButton title={item}
          isActive={item === filter}
          onPress={() => setFilter(item)}
          type={item === 'Sim' ? 'PRIMARY': 'SECONDARY'}
          />}
          horizontal
        />

        <Button title="Cadastrar refeição" onPress={handleFeedBackMeal} />
      </S.ContainerBody>
    </S.Container>
  );
}
