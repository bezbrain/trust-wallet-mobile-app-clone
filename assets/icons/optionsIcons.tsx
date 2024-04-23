import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../../utils/colors";

const { whiteprimary600 } = Colors;

interface OptionsIconsProps {
  name: any;
  handlePress: () => void;
}

const OptionsIcons = ({ name, handlePress }: OptionsIconsProps) => {
  const route = useRoute();
  //   console.log(route.name);

  return (
    <Pressable style={styles.iconContainer} onPress={handlePress}>
      <AntDesign name={name} size={20} color={whiteprimary600} />
    </Pressable>
  );
};

export default OptionsIcons;

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 8,
  },
});
