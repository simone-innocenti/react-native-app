import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AccessNavigation from "./routers/accessStack";
import ProfileNavigation from "./routers/profileStack";
import AuthContextPovider from "./providers/authProvider";
import { AuthContext } from "./contexts/AuthContext";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  const hasValidToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        console.log("WOW");
        setLoggedIn(true);
      }
      return token;
    } catch (e) {
      return false;
    }
  };

  const getFonts = () => {
    return Promise.all([
      hasValidToken(),
      Font.loadAsync({
        "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
      }),
    ]);
  };
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  if (fontLoaded) {
    return (
      <AuthContextPovider setLoggedIn={setLoggedIn}>
        {loggedIn ? <ProfileNavigation /> : <AccessNavigation />}
        <StatusBar style="light" />
      </AuthContextPovider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
}
