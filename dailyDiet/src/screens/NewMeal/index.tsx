import * as S from "./styles";

import { Alert, FlatList } from "react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { MealGroupFilterButton } from "@components/MealGroupFilterButton";
import { Button } from "@components/Button";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

import { addingNewMeal } from "../../Storage/addingNewMeal";

import { AppError } from "@utils/AppError";
import { formatDateBr } from "@utils/Regex";
const regexData = /^(\d{0,2}\/\d{0,2}\/\d{0,4})$/;

export function NewMeal() {
  const [newMealId, setNewMealId] = useState("");
  const [newMealName, setNewMealName] = useState("");
  const [newMealDescription, setNewMealDescription] = useState("");
  const [newMealDate, setNewMealDate] = useState("");
  const [newMealHour, setNewMealHour] = useState("");
  const [filterGroup, setFilterGroup] = useState("");

  const navigation = useNavigation();

  const handleDateChange = (text: string) => {
    const formattedDate = text
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})\d+?$/, "$1");

    setNewMealDate(formattedDate);
  };

  const handleTimeChange = (text: string) => {
    const formattedTime = text
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1:$2")
      .replace(/(\d{2})(\d)/, "$1:$2");

    setNewMealHour(formattedTime);
  };

  function handleGoBack() {
    navigation.goBack();
  }

  function generateId() {
    try {
      const id = Math.random().toString(10).substring(2, 5);
      setNewMealId(id);
    } catch (error) {
      throw error;
    }
  }

  async function handleNewAddMeal() {
    if (newMealName.trim().length === 0) {
      return Alert.alert(
        "Nova refeição",
        "Preencha o nome para adicionar a refeição."
      );
    }

    if (newMealDescription.trim().length === 0) {
      return Alert.alert(
        "Nova refeição",
        "Preencha a descrição para adicionar a refeição."
      );
    }

    if (newMealDate.length < 10) {
      return Alert.alert(
        "Nova refeição",
        "Preencha corretamente a data da refeição."
      );
    }

    if (newMealHour.length < 5) {
      return Alert.alert(
        "Nova refeição",
        "Preencha corretamente a hora da refeição."
      );
    }

    if (filterGroup.length === 0) {
      return Alert.alert(
        "Ops!",
        "Você deve selecionar o filtro se está dentro da dieta ou não."
      );
    }
    const newMeal = {
      id: newMealId,
      name: newMealName,
      description: newMealDescription,
      hour: newMealHour,
      dietGroup: filterGroup,
    };

    try {
      await addingNewMeal({date: newMealDate, newMeal});

      navigation.navigate("feedBackMeal", { filterGroup });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova refeição", "Não foi possível adicionar");
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      generateId();
    }, [])
  );



  return (
    <S.Container>
      <Header title="Nova refeição" onPress={handleGoBack} />

      <S.ContainerBody>
        <Title title="Name" />
        <Input
          placeholder="Digite o nome da refeição"
          value={newMealName}
          onChangeText={setNewMealName}
        />

        <DescriptionInput
          placeholder="Descreva aqui as características da refeição."
          title="Descrição"
          value={newMealDescription}
          onChangeText={setNewMealDescription}
        />

        <S.ContainerInputData>
          <InputData
            title="Data"
            placeholder="00/00/0000"
            maxLength={10}
            value={newMealDate}
            onChangeText={handleDateChange}
          />
          <InputData
            title="Hora"
            placeholder="00:00"
            maxLength={5}
            value={newMealHour}
            onChangeText={handleTimeChange}
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
