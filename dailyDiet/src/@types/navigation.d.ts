import { MealStorageDTO } from "../Storage/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home:  undefined;
            mealStatisticsDetails: {
                percentage: string;
            };
            newMeal: undefined;
            descriptionMeal: {
                id: string;
                date: string;
            };
            feedBackMeal: {
                filterGroup: string;
            };
            editMeal: {
                id: string;
                date: string;
            };
        }
    }
}