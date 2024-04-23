import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivitiesComp = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Activities</Text>
    </View>
  );
};

export default ActivitiesComp;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
  },
  text: {
    color: "#ccc",
  },
});
