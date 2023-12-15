import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealDTO, MealItemStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

import _ from "lodash";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meal: MealItemStorageDTO[] = storage ? JSON.parse(storage) : [];


    const orderByDate = _.orderBy(meal, "date", "desc")

    const orderByHour = orderByDate.map(item => {
      const sortedContent = _.orderBy(item.content , "hour", "desc");
      return { date: item.date, content: sortedContent };
    });



    return orderByHour;
  } catch (error) {
    throw error;
  }
}
