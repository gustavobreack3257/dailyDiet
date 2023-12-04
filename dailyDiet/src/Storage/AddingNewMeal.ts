import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { MEALS_COLLECTION } from "./storageConfig";
import { CreateMealStorageDTO } from "./MealStorageDTO";
import { mealGetAll } from "./mealGetAll";

export async function addingNewMeal({ date, newMeal }: CreateMealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    let storage = "";
    const checkDate = storedMeals.filter((item) => item.date === date);

    if (checkDate.length < 1) {
      storage = JSON.stringify([...storedMeals, { date, content: [newMeal] }]);
    } else {
      const newData = storedMeals.map((item) =>
        item.date === date
          ? { ...item, content: [...item.content, newMeal] }
          : item
      );

      storage = JSON.stringify(newData);
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
