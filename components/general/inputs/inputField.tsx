import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

const { blackprimary100, blackprimary600 } = Colors;

const InputField = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        style={styles.inputField}
        placeholderTextColor={blackprimary100}
      />
      <FontAwesome
        name="search"
        size={18}
        color={blackprimary100}
        style={styles.icon}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  inputField: {
    backgroundColor: blackprimary600,
    height: 42,
    paddingRight: 16,
    paddingLeft: 48,
    borderRadius: 20,
    fontSize: 18,
  },
  icon: {
    position: "absolute",
    top: 11,
    left: 16,
    // bottom: "50%",
    // transform: [{ translateY: 50 }],
  },
});
