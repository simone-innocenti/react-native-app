import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Global from "../../assets/global";
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.top}>
        <Image
          source={require("../../assets/favico.png")}
          style={{ width: 32, height: 32 }}
        />
        <Text style={styles.logoClaim}>AT Subbiano</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 28,
    backgroundColor: Global.mainColor,
  },
  logo: {
    marginRight: 20,
    height: 32,
  },
  top: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  logoClaim: {
    color: "#FFF",
    fontSize: 25,
    fontFamily: Global.bold,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
