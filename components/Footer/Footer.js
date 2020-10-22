import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.footer}>
      <View style={styles.button}>
        <MaterialIcons name="person-outline" size={32} color="#000259" />
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons name="tennis" size={32} color="#000259" />
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={32}
          color="#000259"
        />
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons name="newspaper" size={32} color="#000259" />
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons name="heart-pulse" size={32} color="#000259" />
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons name="id-card" size={32} color="#000259" />
      </View>
    </View>
  );
}
/*
 */

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    width: "100%",
    flexDirection: "row",
  },
  button: {
    flex: 1,

    alignItems: "center",
  },
});
