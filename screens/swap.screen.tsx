import React, { useLayoutEffect } from "react";
import { ScreenWrapper } from "../components/wrappers";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../assets/icons";

const SwapScreen = () => {
  const navigation = useNavigation();

  const handleSwapSettingsClick = () => {
    //
  };

  // RENDER SWAP HEADER ICON
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <OptionsIcons name="setting" handlePress={handleSwapSettingsClick} />
        );
      },
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <Text style={styles.text}>Swap Screen</Text>
    </ScreenWrapper>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
