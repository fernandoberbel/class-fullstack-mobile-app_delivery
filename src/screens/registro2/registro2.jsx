import { ScrollView, View } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Registro2() {
  const [address, setAddres] = useState();
  const [complement, setComplement] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();
  const [zipCode, setZipCode] = useState();

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header texto="Informe seu endereço." />

          <View style={styles.formGroup}>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <TextBox
                  label="Endereço"
                  placeholder="Digite seu endereço"
                  onChangeText={(texto) => setAddres(texto)}
                  value={address}
                />
              </View>
              <View style={styles.form30}>
                <TextBox
                  label="Compl."
                  onChangeText={(texto) => setComplement(texto)}
                  value={complement}
                />
              </View>
            </View>
            <View style={styles.form}>
              <TextBox
                label="Bairro"
                placeholder="Digite seu bairro"
                onChangeText={(texto) => setNeighborhood(texto)}
                value={neighborhood}
              />
            </View>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <TextBox
                  label="Cidade"
                  placeholder="Digite sua cidade"
                  onChangeText={(texto) => setCity(texto)}
                  value={city}
                />
              </View>
              <View style={styles.form30}>
                <TextBox
                  label="UF"
                  onChangeText={(texto) => setUf(texto)}
                  value={uf}
                />
              </View>
            </View>
            <View style={styles.form}>
              <TextBox
                label="CEP"
                placeholder="Digite sua CEP"
                onChangeText={(texto) => setZipCode(texto)}
                value={zipCode}
              />
            </View>

            <View style={styles.form}>
              <Button texto="Criar minha conta" />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Registro2;
