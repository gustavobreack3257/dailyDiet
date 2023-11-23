import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEALS_COLLECTION } from "./storageConfig";

export async function removeMeal(mealName: string) {
  try {
    const storage = await mealGetAll();

    const filtered = storage.filter((meal) => meal.name !== mealName);
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(MEALS_COLLECTION, meals);
  } catch (error) {
    throw error
  }
}
