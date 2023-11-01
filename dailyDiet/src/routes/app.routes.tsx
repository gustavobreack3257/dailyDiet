import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedBackMeal } from "@screens/FeedBackMeal";
import { MealStatisticsDetails } from "@screens/MealStatisticsDetails";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { DescriptionMeal } from "@screens/DescriptionMeal";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="mealStatisticsDetails" component={MealStatisticsDetails} />

      <Screen name="feedBackMeal" component={FeedBackMeal} />

      <Screen name="newMeal" component={NewMeal} />

      <Screen name="descriptionMeal" component={DescriptionMeal} />

      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
