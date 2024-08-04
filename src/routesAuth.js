import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Primary from "./screens/primary/primary.jsx";
import Menu from "./screens/menu/menu.jsx";
import Search from "./screens/search/search.jsx";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="primary"
          component={Primary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            title: "Resultados da busca",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
