import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "./screens/home/home.jsx";
import Favorite from "./screens/favorite/favorite.jsx";
import Orders from "./screens/orders/orders.jsx";
import Profile from "./screens/profile/profile.jsx";
import icons from "./constants/icons.js";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaHome}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="favorite"
          component={Favorite}
          options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaFavorito}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="orders"
          component={Orders}
          options={{
            title: "Meus Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaPedidos}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            title: "Perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaPerfil}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
