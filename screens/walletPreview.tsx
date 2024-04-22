import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

const WalletPreview = () => {
  return (
    <View style={styles.walletContainer}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
};

export default WalletPreview;

const styles = StyleSheet.create({
  walletContainer: {
    backgroundColor: "#000000",
    flex: 1,
  },
  text: {
    color: Colors.whiteprimary600,
  },
});
