import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./search.style.js";
import { restaurantes } from "../../constants/data.js";
import Restaurant from "../../components/restaurant/restaurant.jsx";
import icons from "../../constants/icons.js";

function Search() {
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
              icone={icons.favoritoFull}
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

export default Search;
