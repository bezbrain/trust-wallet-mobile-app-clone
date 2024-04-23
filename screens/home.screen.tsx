import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Wallet Home</Text>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
