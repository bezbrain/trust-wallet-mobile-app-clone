import React, { RefObject } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

const { blackprimary100, blackprimary600, whiteprimary600 } = Colors;

interface InputFieldProp {
  handlePress?: () => void;
  isFocus?: boolean;
  // textInputRef?: RefObject<TextInput>;
}

const InputField = ({
  handlePress,
  // textInputRef,
  isFocus,
}: InputFieldProp) => {
  return (
    // <KeyboardAvoidingView behavior="position">
    <Pressable style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        style={styles.inputField}
        placeholderTextColor={blackprimary100}
        onPressIn={handlePress}
        // ref={textInputRef}
        autoFocus={isFocus}
      />
      <FontAwesome
        name="search"
        size={18}
        color={blackprimary100}
        style={styles.icon}
      />
    </Pressable>
    // </KeyboardAvoidingView>
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
    color: whiteprimary600,
  },
  icon: {
    position: "absolute",
    top: 11,
    left: 16,
    // bottom: "50%",
    // transform: [{ translateY: 50 }],
  },
});
