import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Registro2() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header texto="Informe seu endereço." />

          <View style={styles.formGroup}>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <TextBox label="Endereço" placeholder="Digite seu endereço" />
              </View>
              <View style={styles.form30}>
                <TextBox label="Compl." />
              </View>
            </View>
            <View style={styles.form}>
              <TextBox label="Bairro" placeholder="Digite seu bairro" />
            </View>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <TextBox label="Cidade" placeholder="Digite sua cidade" />
              </View>
              <View style={styles.form30}>
                <TextBox label="UF" />
              </View>
            </View>
            <View style={styles.form}>
              <TextBox label="CEP" placeholder="Digite sua CEP" />
            </View>

            <View style={styles.form}>
              <Button texto="Criar minha conta" />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Acessar minha conta.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Registro2;
