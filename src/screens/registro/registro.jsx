import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Registro() {
  return (
    <View style={styles.container}>
      <Header texto="Criar uma conta." />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox
            label="Nome Completo"
            placeholder="Insira seu nome completo"
          />
        </View>
        <View style={styles.form}>
          <TextBox label="E-mail" placeholder="Digite seu e-mail" />
        </View>
        <View style={styles.form}>
          <TextBox
            label="Escolha uma senha"
            placeholder="Digite sua senha"
            isPassword={true}
          />
        </View>
        <View style={styles.form}>
          <TextBox
            label="Confirme a senha"
            placeholder="Confirme sua senha"
            isPassword={true}
          />
        </View>

        <View style={styles.form}>
          <Button texto="Próximo passo" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Acessar minha conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Registro;
