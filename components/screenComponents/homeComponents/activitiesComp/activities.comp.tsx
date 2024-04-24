import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActivityButton from "./eachActivity/activityButton";

const ActivitiesComp = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Activities</Text>
      <ActivityButton />
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
