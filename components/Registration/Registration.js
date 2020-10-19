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
import { globalStyles } from "../../assets/styles/global";

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
        <Text style={globalStyles.heading}>REGISTRATI PER ACCEDERE</Text>
      </View>
      <View style={globalStyles.row}>
        <TextInput
          placeholder="Nome"
          style={globalStyles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
          onSubmitEditing={() => {
            references[0].focus();
          }}
        />
      </View>
      <View style={globalStyles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[1].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Cognome"
          style={globalStyles.input}
          onChangeText={(text) => setCognome(text)}
          value={cognome}
        />
      </View>

      <View style={globalStyles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[2].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="gg/mm/aaaa"
          style={globalStyles.input}
          onChangeText={(text) => handleDataNascita(text)}
          value={data_nascita}
          keyboardType="decimal-pad"
        />
      </View>

      <View style={globalStyles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[3].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Cellulare"
          style={globalStyles.input}
          onChangeText={(text) => setCellulare(text)}
          value={cellulare}
          keyboardType="phone-pad"
        />
      </View>

      <View style={globalStyles.row}>
        <TextInput
          onSubmitEditing={() => {
            references[4].focus();
          }}
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Email"
          style={globalStyles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>

      <View style={globalStyles.row}>
        <TextInput
          ref={(input) => {
            references.push(input);
          }}
          placeholder="Password"
          style={globalStyles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <View style={globalStyles.rowcheckbox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          style={globalStyles.text}
        >
          Acconsento al trattamento dei dati personali ai sensi dell'articolo 28
          del regolamento UE n. 2016/679
        </Text>
      </View>
      <View style={globalStyles.row}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => Alert.alert("TODO", "VALIDARE ED INVIARE LA FORM")}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              textAlign: "center",
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

const styles = StyleSheet.create({});
