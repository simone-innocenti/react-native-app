import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, ScrollView, Button, Alert } from "react-native";
import GlobalScreenOptions from "../global/menuSettings";
const Stack = createStackNavigator();
import { globalStyles } from "../assets/styles/global";
import { AuthContext } from "../contexts/AuthContext";

const Profile = ({ navigation, route }) => {
  const { dispatch, setLoggedIn } = useContext(AuthContext);
  const handleLogout = async () => {
    await dispatch({ type: "LOGOUT" });
    setLoggedIn(false);
  };
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.subContainer}>
        <View style={globalStyles.row}>
          <Button title="Logout" onPress={() => handleLogout()} />
        </View>
      </View>
    </ScrollView>
  );
};
const Profile2 = ({ navigation, route }) => {
  return (
    <View>
      <Text>PROFILE</Text>
    </View>
  );
};

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={GlobalScreenOptions}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Profile2" component={Profile2} />
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
