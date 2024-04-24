import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CryptoComp = () => {
  return (
    <View>
      <Text style={styles.text}>Crypto</Text>
    </View>
  );
};

export default CryptoComp;

const styles = StyleSheet.create({
  text: {
    color: "#ccc",
  },
});
