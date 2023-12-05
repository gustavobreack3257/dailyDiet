import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealDTO, MealItemStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

import _ from "lodash";
import { SortDescending } from "phosphor-react-native";
export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meal: MealItemStorageDTO[] = storage ? JSON.parse(storage) : [];


    const orderByDate = _.orderBy(meal, "date").sort()

    console.log(orderByDate);

    return orderByDate;
  } catch (error) {
    throw error;
  }
}
