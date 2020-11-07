import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.loading}>
      <View style={styles.loadingcontain}>
        <Image
          style={styles.image}
          source={require("../../assets/loading.gif")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,

    backgroundColor: "rgba(255,255,255,0.5)",

    justifyContent: "center",
    alignItems: "center",
  },

  loadingcontain: {
    backgroundColor: "#fff",
    borderColor: "#f0f0f0",
    borderWidth: 2,
    height: 140,
    width: 140,
    borderRadius: 10,
  },

  image: {
    width: 120,
    height: 120,
    margin: 10,
  },
});
