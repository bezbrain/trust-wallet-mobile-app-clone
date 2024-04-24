import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActivityButton from "./eachActivity/activityButton";
import { ButtonContent } from "../../../../data/homeData";
import { useNavigation } from "@react-navigation/native";

const ActivitiesComp = () => {
  const navigation: any = useNavigation();

  // ROUTE TO DIFFERENT SCREENS
  const activityRouteHandler = (id: number) => {
    // console.log(id);
    if (id === 1) {
      navigation.navigate("Send");
    } else if (id === 2) {
      navigation.navigate("Receive");
    } else if (id === 3) {
      navigation.navigate("Buy");
    } else if (id === 4) {
      navigation.navigate("Sell");
    } else if (id === 5) {
      navigation.navigate("History");
    }
  };

  return (
    <View style={styles.mainContainer}>
      {ButtonContent.map((each) => (
        <ActivityButton
          key={each.id}
          {...each}
          handlePress={() => activityRouteHandler(each.id)}
        />
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
