import * as S from "./styles";

import { Alert, FlatList } from "react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { DescriptionInput } from "@components/DescriptionInput";
import { InputData } from "@components/InputData";
import { Title } from "@components/Title";
import { MealGroupFilterButton } from "@components/MealGroupFilterButton";
import { Button } from "@components/Button";

import { AppError } from "@utils/AppError";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";


import { mealGetAll } from "../../Storage/mealGetAll";

import { editStoredMeals } from "../../Storage/editStoredMeals";

type RouteProps = {
  id: string;
  date: string;
};
export function EditMeal() {
  const [newMealName, setNewMealName] = useState("");
  const [newMealDescription, setNewMealDescription] = useState("");
  const [newMealDate, setNewMealDate] = useState("");
  const [newMealHour, setNewMealHour] = useState("");
  const [filterGroup, setFilterGroup] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  const { id, date } = route.params as RouteProps;

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
  async function handleEditMeal() {
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
    const editMeal = {
      name: newMealName,
      description: newMealDescription,
      hour: newMealHour,
      dietGroup: filterGroup,
    };

    try {
      await editStoredMeals({date, id, editMeal});

      navigation.navigate("feedBackMeal", { filterGroup });

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

  async function fetchMeal() {
    const mealDiet = await mealGetAll();
    const findMeal = mealDiet.find((meal) => meal.date === date);
    if (findMeal) {
      const meal = findMeal.content.find((item) => item.id === id);
      if (meal) {
        setNewMealName(meal.name);
        setNewMealDescription(meal.description);
        setNewMealDate(date);
        setNewMealHour(meal.hour);
        setFilterGroup(meal.dietGroup);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <S.Container>
      <Header title="Editar refeição" onPress={handleGoBack} />

      <S.ContainerBody>
        <Title title="Nome" />
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
            value={newMealDate}
            editable={false}
            onChangeText={handleDateChange}
          />
          <InputData
            title="Hora"
            placeholder="00:00"
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

        <Button title="Salvar alterações" onPress={handleEditMeal} />
      </S.ContainerBody>
    </S.Container>
  );
}
