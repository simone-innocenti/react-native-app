import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Registration } from "../components";

import GlobalScreenOptions from "../global/menuSettings";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={GlobalScreenOptions}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Accedi",
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          title: "Registrati",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
