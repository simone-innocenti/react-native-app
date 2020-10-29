import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login, Registration } from "../components";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accedi" component={Login} />
        <Tab.Screen name="Registrati" component={Registration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
