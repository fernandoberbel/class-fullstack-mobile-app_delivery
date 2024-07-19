import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style.js";

function Banners(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner, index) => {
          return (
            <View key={index} style={styles.banner}>
              <TouchableOpacity>
                <Image source={banner.icone} style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Banners;
