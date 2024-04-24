import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { rippleEffect } from "../../../../../styles/ripple-effect";

const { whiteprimary600 } = Colors;

const ChangeAccount = () => {
  return (
    <View style={styles.accountContainer}>
      <Pressable
        style={({ pressed }) => rippleEffect(pressed, styles.accountName)}
      >
        <Text style={styles.currentAccount}>Multi-Coin Wall...</Text>
        <FontAwesome name="caret-down" size={20} color={whiteprimary600} />
      </Pressable>

      <View style={styles.iconsContainer}>
        <Pressable>
          <Ionicons name="copy-outline" size={20} color={whiteprimary600} />
        </Pressable>
        <Pressable>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color={whiteprimary600}
          />
        </Pressable>
        <Pressable>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={whiteprimary600}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ChangeAccount;

const styles = StyleSheet.create({
  accountContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  currentAccount: {
    color: whiteprimary600,
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
