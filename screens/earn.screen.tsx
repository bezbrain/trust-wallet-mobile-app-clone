import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenWrapper } from "../components/wrappers";
import { Colors } from "../utils/colors";

const EarnScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Let's Earn</Text>
    </ScreenWrapper>
  );
};

export default EarnScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
