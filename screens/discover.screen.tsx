import React from "react";
import { ScreenWrapper } from "../components/wrappers";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

const DiscoverScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Discover Screen</Text>
    </ScreenWrapper>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
