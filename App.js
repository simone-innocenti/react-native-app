import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
      const userData = await AsyncStorage.getItem("@userData");

      if (userData) {
        const data = JSON.parse(userData);
        setCurrentData((prevState) => {
          return data;
        });

        //
      }
      if (token) {
        setToken(token);
        setLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
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
  const [currentData, setCurrentData] = useState({});
  const [token, setToken] = useState("");

  if (fontLoaded) {
    return (
      <AuthContextPovider
        setLoggedIn={setLoggedIn}
        setLoading={setLoading}
        currentData={currentData}
        setCurrentData={setCurrentData}
        token={token}
      >
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
