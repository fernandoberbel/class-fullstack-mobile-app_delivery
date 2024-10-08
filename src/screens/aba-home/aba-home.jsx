import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Categories from "../../components/categories/categories.jsx";
import { banners, categorias, restaurantes } from "../../constants/data.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurant from "../../components/restaurant/restaurant.jsx";

function AbaHome(props) {
  function OpenCardapio() {
    props.navigation.navigate("menu");
  }
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />

        <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
          <Image source={icons.cart} style={styles.cart} />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextBox
          placeholder="O que vamos pedir hoje?"
          onChangeText={(texto) => setSearch(texto)}
          value={search}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories dados={categorias} />

        <Banners dados={banners} />

        <Text style={styles.texto}>Destaques</Text>

        {restaurantes.map((restaurante, index) => {
          return (
            <View key={index}>
              {/* <Image source={restaurante.logotipo} /> */}
              <Restaurant
                logotipo={restaurante.logotipo}
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                icone={icons.favoritoFull}
                onPress={OpenCardapio}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AbaHome;
