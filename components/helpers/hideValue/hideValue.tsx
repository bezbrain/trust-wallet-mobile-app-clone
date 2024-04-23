import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

const { whiteprimary600 } = Colors;

const HideValue = () => {
  return (
    <View style={styles.dotsContainer}>
      {Array(5)
        .fill(undefined)
        .map((_, i) => (
          <Octicons name="dot-fill" size={32} color={whiteprimary600} key={i} />
        ))}
    </View>
  );
};

export default HideValue;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
