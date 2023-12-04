export type MealDTO = {
    id: string;
    name: string;
    description: string;
    hour: string;
    dietGroup: string;
}
export type CreateMealStorageDTO = {
    date: string;
    newMeal: MealDTO;
}
export type UpdateMealStorageDTO = {
    date: string;
    id: string;
    editMeal: Omit<MealDTO, 'id'>
}
export type MealItemStorageDTO = {
    date: string;
    content: MealDTO[];
}
