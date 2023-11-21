import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { MEALS_COLLECTION } from "./storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetAll } from "./mealGetAll";

export async function addingNewMeal(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();
    const MealAlreadyExits = storedMeals.filter(meal => meal.name === newMeal.name)

    if(MealAlreadyExits.length > 0){
      throw new AppError('Essa refeição ja existe')
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
