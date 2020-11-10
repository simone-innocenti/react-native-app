import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
//import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Dashboard = ({ navigation, route }) => {
  const { dispatch, setLoggedIn, authState } = useContext(AuthContext);
  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
    AsyncStorage.removeItem("@token").then(() => setLoggedIn(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Prenota")}>
            <Text style={styles.button}>PRENOTA CAMPO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Prenotazioni")}>
            <Text style={styles.button}>VEDI PRENOTAZIONI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Notizie")}>
            <Text style={styles.button}>AVVISI</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Certificato")}>
            <Text style={styles.button}>SCADENZA CERTIFICATO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Profilo")}>
            <Text style={styles.button}>MODIFICA PROFILO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => handleLogout()}>
            <Text style={styles.button}>ESCI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  row: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  column: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  button: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",

    backgroundColor: "#000259",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 14,
    borderRadius: 5,
    width: 160,
    height: 120,
    fontFamily: "Montserrat-Bold",
    fontWeight: "bold",
    lineHeight: 20,
  },
});
