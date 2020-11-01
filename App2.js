import React, { useState, useContext, useMemo } from "react";
import { View, Text } from "react-native";
import GlobalContextProvider from "./context/GlobalContext";
import Funct from "./test/funct";
import Test from "./test/test";
//const AuthContext = React.createContext();

export default function App() {
  return (
    <GlobalContextProvider>
      <Test />
      <Funct />
    </GlobalContextProvider>
  );
}
