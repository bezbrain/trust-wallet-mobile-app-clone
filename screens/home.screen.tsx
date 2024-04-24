import React, { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../assets/icons";
import { HeaderComp } from "../components/screenComponents/homeComponents";
import { ActivitiesComp } from "../components/screenComponents/homeComponents/activitiesComp";

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
      <ActivitiesComp />

      <View style={styles.currencyContainer}>
        <Pressable>
          <Text style={styles.headerText}>Crypto</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.headerText}>NFTs</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  currencyContainer: {
    marginTop: 24,
  },
  headerText: {
    color: Colors.whiteprimary600,
  },
});
