import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./menu.style.js";
import { restaurante } from "../../constants/data.js";
import icons from "../../constants/icons.js";
import Product from "../../components/product/product.jsx";

function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={restaurante.foto}
          style={styles.foto}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.containerBack}
          onPress={props.navigation.goBack}
        >
          <Image source={icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.nome}>Nome do estabelecimento</Text>
          <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
        </View>
        <Image source={icons.favoritoFull} style={styles.favorito} />
      </View>

      <ScrollView>
        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.endereco}>
            Avenida Brigadeiro Luis Antonioo, 1250 - CJ 1651
          </Text>
        </View>

        {restaurante.cardapio.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containerProduto}>
              <Text style={styles.categoria}>{item.categoria}</Text>

              {item.itens.map((prod) => {
                return (
                  <Product
                    key={prod.idProduto}
                    idProduto={prod.idProduto}
                    foto={prod.foto}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    valor={prod.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Menu;
