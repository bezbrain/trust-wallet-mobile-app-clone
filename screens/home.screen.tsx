import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../assets/icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleManageAssetClick = () => {
    //
  };

  const handleSettingClick = () => {
    //
  };

  // RENDER HEADER ICON
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <OptionsIcons
            name="codepen-circle"
            handlePress={handleManageAssetClick}
          />
        );
      },
      headerLeft: () => {
        return <OptionsIcons name="setting" handlePress={handleSettingClick} />;
      },
    });
  }, [navigation]);
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Wallet Home</Text>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
