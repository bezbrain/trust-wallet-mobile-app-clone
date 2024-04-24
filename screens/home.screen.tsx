import React, { useLayoutEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../assets/icons";
import { HeaderComp } from "../components/screenComponents/homeComponents";
import { ActivitiesComp } from "../components/screenComponents/homeComponents/activitiesComp";
import { rippleEffect } from "../styles/ripple-effect";
import { CryptoComp } from "../components/screenComponents/homeComponents/digitalCurrencies/crypto";
import { NftsComp } from "../components/screenComponents/homeComponents/digitalCurrencies/nfts";

const { whiteprimary600, greenprimary600 } = Colors;

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(true);

  const navigation = useNavigation();

  const handleManageAssetClick = () => {
    //
  };

  const handleGeneralSettingClick = () => {
    //
  };

  const showCryptoHandler = () => {
    setCurrentPage(true);
  };
  const showNftsHandler = () => {
    setCurrentPage(false);
  };

  // RENDER HOME HEADER ICONS
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <OptionsIcons
            name="codepen-circle"
            handlePress={handleManageAssetClick}
            color={whiteprimary600}
          />
        );
      },
      headerLeft: () => {
        return (
          <OptionsIcons
            name="setting"
            handlePress={handleGeneralSettingClick}
            color={whiteprimary600}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <HeaderComp />
      <ActivitiesComp />

      {/* Crypto and NFTs Header */}
      <View style={styles.currencyContainer}>
        <View style={styles.controlHeader}>
          <View style={styles.headerContainer}>
            <Pressable
              style={({ pressed }) => rippleEffect(pressed)}
              onPress={showCryptoHandler}
            >
              <Text style={styles.headerText}>Crypto</Text>
              {currentPage && <View style={styles.border}></View>}
            </Pressable>

            <Pressable
              style={({ pressed }) => rippleEffect(pressed)}
              onPress={showNftsHandler}
            >
              <Text style={styles.headerText}>NFTs</Text>
              {!currentPage && <View style={styles.border}></View>}
            </Pressable>
          </View>
        </View>

        {/* Render Crypto or NFTs components */}
        {currentPage ? <CryptoComp /> : <NftsComp />}
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  currencyContainer: {
    marginTop: 24,
  },
  controlHeader: {
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
  headerText: {
    // marginBottom: 8,
    color: whiteprimary600,
    fontSize: 18,
  },
  border: {
    height: 3,
    backgroundColor: greenprimary600,
    marginTop: 8,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
});
