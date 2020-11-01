import React, { useContext } from "react";

import { View, Text } from "react-native";
import { GlobalContext } from "../context/GlobalContext";
export default function Funct() {
  const context = useContext(GlobalContext);
  console.log("inFUNCT", context);
  return (
    <View>
      <Text>FUNCTION</Text>
    </View>
  );
}
