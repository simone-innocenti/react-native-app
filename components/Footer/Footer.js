import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return <Text style={styles.footer}>Footer!!!!</Text>;
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 20,
  },
});
