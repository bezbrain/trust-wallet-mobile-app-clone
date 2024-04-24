import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../../utils/colors";
import { rippleEffect } from "../../styles/ripple-effect";

const { whiteprimary600 } = Colors;

interface OptionsIconsProps {
  name: any;
  handlePress: () => void;
  color: string;
}

const OptionsIcons = ({ name, handlePress, color }: OptionsIconsProps) => {
  const route = useRoute();
  //   console.log(route.name);

  return (
    <Pressable
      style={({ pressed }) => rippleEffect(pressed, styles.iconContainer)}
      onPress={handlePress}
      android_ripple={{ color: "#ccc" }}
    >
      <AntDesign name={name} size={24} color={color} />
    </Pressable>
  );
};

export default OptionsIcons;

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 8,
  },
});
