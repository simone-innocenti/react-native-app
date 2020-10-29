import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer, useEffect } from "react";
import * as Font from "expo-font";
import { View, Text } from "react-native";
import { AppLoading } from "expo";

//import Footer from "./components/Footer";

import { globalStyles } from "./assets/styles/global";
import AccessNavigation from "./routers/accessStack";
import ProfileNavigation from "./routers/profileStack";

import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = React.createContext();

const getFonts = () =>
  Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

import { AppearanceProvider, useColorScheme } from "react-native-appearance";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ({ token }) => {
        dispatch({ type: "SIGN_IN", token: token });
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT" });
        AsyncStorage.removeItem("userToken");
      },
      signUp: async ({ token }) => {
        dispatch({ type: "SIGN_IN", token: token });
      },
    }),
    []
  );

  if (fontLoaded) {
    return (
      <AuthContext.Provider value={authContext}>
        {state.userToken ? <ProfileNavigation /> : <AccessNavigation />}
        <StatusBar style="light" />
      </AuthContext.Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
