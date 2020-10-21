import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { globalStyles } from "../../assets/styles/global";

export default function Login({ navigation }) {
  let references = [];
  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.subContainer}>
        <View>
          <Text style={globalStyles.heading}>LOGIN</Text>
        </View>

        <View style={globalStyles.row}>
          <TextInput
            placeholder="Username"
            style={globalStyles.input}
            onChangeText={(text) => setUSername(text)}
            value={username}
            onSubmitEditing={() => {
              references[0].focus();
            }}
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
              Accedi
            </Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.row}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Registration")}
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
      <StatusBar style="light" />
    </ScrollView>
  );
}
