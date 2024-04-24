import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../../../utils/colors";

const { whiteprimary600, blackprimary600 } = Colors;

interface AcivityButtonProp {
  icon: any;
  name: string;
}

const ActivityButton = ({ icon, name }: AcivityButtonProp) => {
  return (
    <View>
      <Pressable style={styles.iconContainer}>
        <AntDesign name={icon} size={20} color={whiteprimary600} />
      </Pressable>
      <Text style={styles.iconText}>{name}</Text>
    </View>
  );
};

export default ActivityButton;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: blackprimary600,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 8,
  },
});
