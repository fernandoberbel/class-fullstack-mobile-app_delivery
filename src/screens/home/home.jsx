import { Image, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./home.style.js";
import icons from "../../constants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Categories from "../../components/categories/categories.jsx";
import { banners, categorias, restaurantes } from "../../constants/data.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurant from "../../components/restaurant/restaurant.jsx";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
        <Image source={icons.cart} style={styles.cart} />
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
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
