import React from "react";

import { globalStyles } from "../../assets/styles/global";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import Axios from "react-native-axios";
const endpoint = "https://atsubbiano.it/api/getdata";
export default class App extends React.Component {
  state = {
    nome: "",
    cognome: "",
    born_date: "",
    telefono: "",
    password: "",
    email: "",
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.context.setLoading(true);
    const getData = async () => {
      try {
        const { data } = await Axios.get(endpoint, {
          headers: {
            Authorization: this.context.authState.userToken,
          },
        });
        const { nome, cognome, born_date, cellulare, email } = data.userData;
        this.setState((prevState, props) => {
          return {
            nome: nome,
            cognome: cognome,
            born_date: born_date,
            cellulare: cellulare,
            email: email,
          };
        });
        this.context.setLoading(false);
      } catch (e) {
        console.log("error", e);
      }
    };
    getData();
  }

  componentWillUnmount() {}

  render() {
    const references = [];
    const { nome, cognome, born_date, cellulare, email, password } = this.state;

    return (
      <ScrollView style={globalStyles.container}>
        <View style={globalStyles.subContainer}>
          <View style={globalStyles.row}>
            <TextInput
              placeholder="Nome"
              style={globalStyles.input}
              onChangeText={(text) => this.setState({ nome: text })}
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
              onChangeText={(text) => this.setState({ cognome: text })}
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
              onChangeText={(text) => this.setState({ born_date: text })}
              value={born_date}
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
              onChangeText={(text) => this.setState({ cellulare: text })}
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
              onChangeText={(text) => this.setState({ email: text })}
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
              onChangeText={(text) => this.setState({ password: text })}
              value={password}
              secureTextEntry={true}
            />
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
                Salva
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

/*
<ScrollView style={globalStyles.container}>
        <View style={globalStyles.subContainer}>
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
        
        <Text
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
        style={globalStyles.text}
      >
        Acconsento al trattamento dei dati personali ai sensi
        dell'articolo 28 del regolamento UE n. 2016/679
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
          Aggiorna
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>*/
