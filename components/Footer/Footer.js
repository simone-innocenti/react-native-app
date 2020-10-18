import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Global from "../../assets/global";

export default function Header() {
  return <Text style={styles.footer}>Footer!!!!</Text>;
}

const styles = StyleSheet.create({
  footer: {
    color: Global.mainColor,
    fontSize: 20,
  },
});
