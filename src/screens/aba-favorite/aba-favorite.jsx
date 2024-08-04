import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./aba-favorite.style.js";
import { restaurantes } from "../../constants/data.js";
import Restaurant from "../../components/restaurant/restaurant.jsx";
import icons from "../../constants/icons.js";

function AbaFavorite() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurante) => restaurante.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Restaurant
              logotipo={item.logotipo}
              nome={item.nome}
              endereco={item.endereco}
              icone={icons.remove}
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default AbaFavorite;
