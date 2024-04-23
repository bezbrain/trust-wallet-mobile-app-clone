import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { Entypo } from "@expo/vector-icons";
import { useHomeContext } from "../../../../../context/homeContext/homeContext";

const { whiteprimary600, blackprimary100 } = Colors;

const CurrentAmount = () => {
  const { isOpen, setIsOpen } = useHomeContext();

  const handleToggleValue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Pressable onPress={handleToggleValue} style={styles.rootContainer}>
      <View style={styles.valueContainer}>
        <Text style={styles.valueAmount}>$6.60</Text>

        <View style={styles.iconsContainer}>
          {!isOpen && <Entypo name="eye" size={24} color={blackprimary100} />}
          {isOpen && (
            <Entypo name="eye-with-line" size={24} color={blackprimary100} />
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default CurrentAmount;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 8,
    maxWidth: 140,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    // width: "auto",
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
