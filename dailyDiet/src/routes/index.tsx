import { AppRoute } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
export function Routes(){
    return(
        <NavigationContainer>
            <AppRoute/>
        </NavigationContainer>
    )
}