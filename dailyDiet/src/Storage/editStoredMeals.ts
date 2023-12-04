import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "./storageConfig";
import { mealGetAll } from "./mealGetAll";
import { UpdateMealStorageDTO } from "./MealStorageDTO";

export async function editStoredMeals({id, date, editMeal}: UpdateMealStorageDTO) {
    const storage = await mealGetAll();

    const mealData = storage.map((meal) => meal.date === date ? {...meal, content: meal.content.map(item => item.id === id ? {...item, ...editMeal} :item)} :meal);
    const meals = JSON.stringify(mealData)

    await AsyncStorage.setItem(MEALS_COLLECTION, meals);

}