import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../assets/icons";
import { HeaderComp } from "../components/screenComponents/homeComponents";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleManageAssetClick = () => {
    //
  };

  const handleGeneralSettingClick = () => {
    //
  };

  // RENDER HOME HEADER ICONS
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
        return (
          <OptionsIcons
            name="setting"
            handlePress={handleGeneralSettingClick}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <HeaderComp />
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
