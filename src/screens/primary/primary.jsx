import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import AbaHome from "../aba-home/aba-home.jsx";
import AbaFavorite from "../aba-favorite/aba-favorite.jsx";
import AbaOrders from "../aba-orders/aba-orders.jsx";
import AbaProfile from "../aba-profile/aba-profile.jsx";
import icons from "../../constants/icons.js";

const Tab = createBottomTabNavigator();

function Primary() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={AbaHome}
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
        component={AbaFavorite}
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
        component={AbaOrders}
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
        component={AbaProfile}
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
  );
}

export default Primary;
