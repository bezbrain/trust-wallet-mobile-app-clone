import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenWrapper } from "../components/wrappers";
import { Colors } from "../utils/colors";

const Earn = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Let's Earn</Text>
    </ScreenWrapper>
  );
};

export default Earn;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
