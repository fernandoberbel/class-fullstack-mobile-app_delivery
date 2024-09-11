import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./order-detail.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/data.js";
import Product from "../../components/product/product.jsx";

function OrderDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.containerBack}>
          <Image source={icons.back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes do Pedido</Text>
      </View>

      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Product
              key={item.idItem}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              valor={item.vlTotal}
            />
          );
        }}
      />

      <View>
        <View style={styles.valores}>
          <Text style={styles.total}>Resumo dos Valores</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.valor}>Subtotal</Text>
          <Text style={styles.valor}>R$ 66,00</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.valor}>Taxa de entrega</Text>
          <Text style={styles.valor}>R$ 5,00</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ 71,00</Text>
        </View>
      </View>
    </View>
  );
}

export default OrderDetail;
