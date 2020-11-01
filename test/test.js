import React, { useState, useContext, useMemo } from "react";
import { View, Text, Button } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

export default class Test extends React.Component {
  static contextType = GlobalContext;

  render() {
    console.log("In class", this.context);
    return (
      <View style={{ padding: 50 }}>
        <Text>CONTEXT CONSUMER</Text>
      </View>
    );
  }
}
