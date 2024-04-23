import React from "react";
import { ScreenWrapper } from "../components/wrappers";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

const SwapScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Swap Screen</Text>
    </ScreenWrapper>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
