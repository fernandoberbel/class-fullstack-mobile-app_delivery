import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile.style.js";
import icons from "../../constants/icons.js";

function Profile() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View>
          <Image source={icons.endereco} style={styles.icons} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Endereço</Text>
          <Text style={styles.subtitulo}>Meu endereço de entrega</Text>
        </View>

        <View>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Image source={icons.dados} style={styles.icons} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Meus Dados</Text>
          <Text style={styles.subtitulo}>Informações da minha conta</Text>
        </View>

        <View>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Image source={icons.logout} style={styles.icons} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Desconectar</Text>
          <Text style={styles.subtitulo}>
            Desconectar seu usuário deste aparelho
          </Text>
        </View>

        <View>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
