import { MealStorageDTO } from "../Storage/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home:  undefined;
            mealStatisticsDetails: undefined;
            newMeal: undefined;
            descriptionMeal: {
                name: string;
            };
            feedBackMeal: {
                filterGroup: string;
            };
            editMeal: undefined;
        }
    }
}