import { ScrollView, View } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Registro(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header texto="Criar uma conta." />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <TextBox
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                onChangeText={(texto) => setName(texto)}
                value={name}
              />
            </View>
            <View style={styles.form}>
              <TextBox
                label="E-mail"
                placeholder="Digite seu e-mail"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
              />
            </View>
            <View style={styles.form}>
              <TextBox
                label="Escolha uma senha"
                placeholder="Digite uma senha"
                isPassword={true}
                onChangeText={(texto) => setPassword1(texto)}
                value={password1}
              />
            </View>
            <View style={styles.form}>
              <TextBox
                label="Confirme a senha"
                placeholder="Confirme sua senha"
                isPassword={true}
                onChangeText={(texto) => setPassword2(texto)}
                value={password2}
              />
            </View>

            <View style={styles.form}>
              <Button
                texto="Próximo passo"
                onPress={() => props.navigation.navigate("registro2")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Registro;
