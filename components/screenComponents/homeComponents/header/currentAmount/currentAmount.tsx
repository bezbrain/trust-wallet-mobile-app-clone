import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { Entypo } from "@expo/vector-icons";

const { whiteprimary600, blackprimary100 } = Colors;

const CurrentAmount = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={styles.valueContainer}>
      <Text style={styles.valueAmount}>$6.60</Text>

      <View style={styles.iconsContainer}>
        <Entypo name="eye" size={24} color={blackprimary100} />
        {isOpen && (
          <Entypo name="eye-with-line" size={24} color={blackprimary100} />
        )}
      </View>
    </View>
  );
};

export default CurrentAmount;

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  valueAmount: {
    color: whiteprimary600,
    fontSize: 28,
    fontWeight: "bold",
  },
  iconsContainer: {
    //
  },
});
