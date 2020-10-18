import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, ScrollView } from "react-native";
import { AppLoading } from "expo";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Global from "./assets/global";

const getFonts = () =>
  Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView style={styles.main}>
          <Registration />
        </ScrollView>
        <View style={styles.footer}>
          <Footer />
        </View>
        <StatusBar style="light" />
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 30,
  },
  footer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    alignContent: "center",
    textAlign: "center",
    borderTopColor: Global.mainColor,
    borderTopWidth: 1,
  },
});
