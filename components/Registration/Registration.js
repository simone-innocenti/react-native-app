import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Global from "../../assets/global";

const Registration = () => {
  const references = [];
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [data_nascita, setData_nascita] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleDataNascita = (text) => {
    //TODO
    setData_nascita(text);
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>REGISTRATI PER ACCEDERE</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
          onSubmitEditing={() => {
            references[0].focus();
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[1].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Cognome"
          style={styles.input}
          onChangeText={(text) => setCognome(text)}
          value={cognome}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[2].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="gg/mm/aaaa"
          style={styles.input}
          onChangeText={(text) => handleDataNascita(text)}
          value={data_nascita}
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[3].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Cellulare"
          style={styles.input}
          onChangeText={(text) => setCellulare(text)}
          value={cellulare}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[4].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>

      <View style={styles.row}>
        <TextInput
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.rowcheckbox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          style={styles.text}
        >
          Acconsento al trattamento dei dati personali ai sensi dell'articolo 28
          del regolamento UE n. 2016/679
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("TODO", "VALIDARE ED INVIARE LA FORM")}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              textAlign: "center",
              fontFamily: Global.mainFont,
            }}
          >
            Registrati
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  heading: {
    marginVertical: 30,
    fontSize: 23,
    fontFamily: Global.bold,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontFamily: Global.mainFont,
  },
  row: {
    marginVertical: 10,
  },
  rowcheckbox: {
    marginVertical: 10,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 20,
  },
  button: {
    backgroundColor: Global.mainColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    fontFamily: Global.mainFont,
  },
});
