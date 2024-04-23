import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

const { whiteprimary600, blackprimary600 } = Colors;

const InputField = () => {
  return (
    <View>
      <TextInput placeholder="Search" style={styles.inputField} />
      <FontAwesome name="search" size={24} color={whiteprimary600} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: blackprimary600,
  },
});
