import { Image, Text, View } from "react-native";
import { styles } from "./order.style.js";

function Order(props) {
  return (
    <View style={styles.orders}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>

        <View style={styles.valorData}>
          <Text style={styles.valor}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.valor)}
          </Text>
          <Text style={styles.valor}>{props.data}</Text>
        </View>

        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
}

export default Order;
