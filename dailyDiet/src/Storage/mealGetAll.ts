import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealDTO, MealItemStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meal: MealItemStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meal
  } catch (error) {
    throw error;
  }
}
