import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";
export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meal: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meal;
  } catch (error) {
    throw error;
  }
}
