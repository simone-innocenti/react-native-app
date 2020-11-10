import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AccessNavigation from "./routers/accessStack";
import DashboardNavigation from "./routers/dashboardStack";
import AuthContextPovider from "./providers/authProvider";
import AsyncStorage from "@react-native-community/async-storage";
import Loading from "./components/Loading";
export default function App() {
  const hasValidToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
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
  const [loading, setLoading] = useState(false);
  if (fontLoaded) {
    return (
      <AuthContextPovider setLoggedIn={setLoggedIn} setLoading={setLoading}>
        {loggedIn ? <DashboardNavigation /> : <AccessNavigation />}
        <StatusBar style="light" />
        {loading ? <Loading /> : null}
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
