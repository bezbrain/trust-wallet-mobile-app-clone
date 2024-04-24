import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActivityButton from "./eachActivity/activityButton";
import { ButtonContent } from "../../../../data/homeData";

const ActivitiesComp = () => {
  return (
    <View style={styles.mainContainer}>
      {ButtonContent.map((each) => (
        <ActivityButton key={each.id} {...each} />
      ))}
    </View>
  );
};

export default ActivitiesComp;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
