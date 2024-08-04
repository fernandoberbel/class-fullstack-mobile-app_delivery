import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurant.style.js";

function Restaurant(props) {
  return (
    <TouchableOpacity style={styles.restaurants} onPress={() => props.onPress()}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.favorito} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default Restaurant;
