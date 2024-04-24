import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityButton } from "../../../activitiesComp";
import { singlePageButtonContent } from "../../../../../../data/singlePageData";

const CryptoBtns = () => {
  return (
    <View style={styles.mainContainer}>
      {singlePageButtonContent.map((each) => (
        <ActivityButton key={each.id} {...each} />
      ))}
    </View>
  );
};

export default CryptoBtns;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
