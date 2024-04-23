import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface OptionsIconsProps {
  name: any;
  handlePress: () => void;
}

const OptionsIcons = ({ name, handlePress }: OptionsIconsProps) => {
  return (
    <Pressable style={styles.iconContainer} onPress={handlePress}>
      <AntDesign name={name} size={20} color="#ccc" />
    </Pressable>
  );
};

export default OptionsIcons;

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 8,
  },
});
