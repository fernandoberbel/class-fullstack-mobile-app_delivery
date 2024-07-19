import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurant.style.js";

function Restaurant(props) {
  return (
    <View style={styles.restaurants}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.favorito} />
      </TouchableOpacity>
    </View>
  );
}

export default Restaurant;
