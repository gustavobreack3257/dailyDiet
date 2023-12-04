import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEALS_COLLECTION } from "./storageConfig";

export async function removeMeal(id: string, date: string) {
  try {
    const storage = await mealGetAll();
    let meals = [];
    const mealFiltered = storage.find((meal) => meal.date === date);
    if(mealFiltered && mealFiltered?.content.length < 2){
      meals = storage.filter(meal => meal.date !== date)
    } else {
      meals = storage.map(meal => meal.date === date ? {...meal, content:meal.content.filter(item => item.id !== id)} :meal)
    }
    const mealsStringify = JSON.stringify(meals);

    await AsyncStorage.setItem(MEALS_COLLECTION, mealsStringify);
  } catch (error) {
    throw error
  }
}
