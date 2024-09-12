import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

import { COLORS } from "./constants/theme.js";

import Primary from "./screens/primary/primary.jsx";
import Menu from "./screens/menu/menu.jsx";
import Search from "./screens/search/search.jsx";
import ProductDetail from "./screens/detalhe-produto/product-detail.jsx";
import OrderDetail from "./screens/order-detail/order-detail.jsx";
import Checkout from "./screens/checkout/checkout.jsx";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="primary"
          component={Primary}
          options={{ headerShown: false, title: "" }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{
            headerShadowVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: "center",
            animation: "slide_from_bottom",
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => alert("Ok")}>
                  <Text style={{ color: COLORS.red }}>Limpar</Text>
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="order-detail"
          component={OrderDetail}
          options={{
            headerShadowVisible: false,
            title: "Detalhe do Pedido",
            headerTitleAlign: "center",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="product-detail"
          component={ProductDetail}
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
