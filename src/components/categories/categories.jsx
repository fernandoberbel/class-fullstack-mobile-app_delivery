import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categories.style.js";

function Categories(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((categoria, index) => {
          return (
            <View key={index} style={styles.category}>
              <TouchableOpacity>
                <Image source={categoria.icone} style={styles.icon} />
                <Text style={styles.description}>{categoria.descricao}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories;
