import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { AppLoading } from "expo";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Global from "./assets/global";
import { globalStyles } from "./assets/styles/global";
import Navigator from "./routers/access";
const getFonts = () =>
  Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <AppearanceProvider>
        <Navigator />
        <View style={globalStyles.footer}>
          <Footer />
        </View>
        <StatusBar style="light" />
      </AppearanceProvider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
