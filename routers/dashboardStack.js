import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { View, Text, ScrollView, Button, Alert } from "react-native";
import GlobalScreenOptions from "../global/menuSettings";

//import { globalStyles } from "../assets/styles/global";
import { AuthContext } from "../contexts/AuthContext";
//import AsyncStorage from "@react-native-community/async-storage";
import {
  News,
  Certificato,
  Profile,
  Reservations,
  Reserve,
  Dashboard,
} from "../components";
const Stack = createStackNavigator();
const ProfileStackNavigation = () => {
  const {
    authState: { profile },
    currentData,
  } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={GlobalScreenOptions}>
      <Stack.Screen
        name="Dashboard"
        options={{ title: `Ciao, ${profile.nome}` }}
        component={Dashboard}
      />
      <Stack.Screen name="Prenota" component={Reserve} />
      <Stack.Screen name="Prenotazioni" component={Reservations} />
      <Stack.Screen name="Notizie" component={News} />
      <Stack.Screen name="Certificato" component={Certificato} />
      <Stack.Screen name="Profilo" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <ProfileStackNavigation />
    </NavigationContainer>
  );
}
