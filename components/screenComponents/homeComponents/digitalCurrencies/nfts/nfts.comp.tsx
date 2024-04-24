import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NftsComp = () => {
  return (
    <View>
      <Text style={styles.text}>NFTs</Text>
    </View>
  );
};

export default NftsComp;

const styles = StyleSheet.create({
  text: {
    color: "#ccc",
  },
});
