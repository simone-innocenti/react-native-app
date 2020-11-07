import React, { useState, useEffect, useContext } from "react";
import Axios from "react-native-axios";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../assets/styles/global";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";

const endpoint = "https://atsubbiano.it/api";

const Login = ({ navigation, route }) => {
  let references = [];
  const [username, setUSername] = useState("simone.innocenti2@gmail.com");
  const [password, setPassword] = useState("simone83");
  const { dispatch, setLoggedIn, setLoading } = useContext(AuthContext);

  const handleLoginButton = async () => {
    try {
      setLoading(true);
      const {
        data: { AUTH, USER },
        status,
      } = await Axios.post(`${endpoint}/login`, {
        username: username,
        password: password,
      });
      if (status === 201) {
        if (AUTH.length && USER.length) {
          try {
            await dispatch("LOGIN", { token: AUTH, user: username });
            await AsyncStorage.setItem("@token", AUTH);
            setLoggedIn(true);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            return false;
          }
        }
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      Alert.alert("Login fallito, riprova");
      return;
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.subContainer}>
        <View style={globalStyles.row}>
          <TextInput
            placeholder="Username"
            style={globalStyles.input}
            onChangeText={(text) => setUSername(text)}
            value={username}
            onSubmitEditing={() => {
              references[0].focus();
            }}
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

        <View style={globalStyles.row}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => handleLoginButton()}
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
        {
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
        }
      </View>
    </ScrollView>
  );
};

export default Login;

/*

const { signIn } = useContext(AuthContext);

  const handleLoginButton = async () => {
    const endpoint = "https://atsubbiano.it/api";
    try {
      const {
        data: { AUTH, USER },
        status,
      } = await Axios.post(`${endpoint}/login`, {
        username: username,
        password: password,
      });
      if (status === 201) {
        console.log(AUTH);
        if (AUTH.length && USER.length) {
          try {
            await signIn({ token: AUTH, user: username });
          } catch (e) {
            return false;
          }
          try {
            await AsyncStorage.setItem(
              "userDataKey",
              JSON.stringify({
                username: username,
                AUTH: AUTH,
                USER: USER,
              })
            );
            //console.log("STOREM DATA");
          } catch (e) {
            // saving error
          }
          return true;
        }
      }
    } catch (e) {
      Alert.alert("Login fallito, riprova");
      return;
    }
  };
*/
