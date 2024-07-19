import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro2/registro2.jsx";
import Home from "./screens/home/home.jsx";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registro"
          component={Registro}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />
        <Stack.Screen
          name="registro2"
          component={Registro2}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
