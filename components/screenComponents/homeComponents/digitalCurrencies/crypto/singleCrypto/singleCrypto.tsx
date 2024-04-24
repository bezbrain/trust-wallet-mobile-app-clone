import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScreenWrapper } from "../../../../../wrappers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { OptionsIcons } from "../../../../../../assets/icons";
import { Colors } from "../../../../../../utils/colors";
import CryptoBtns from "./cryptoBtn";
import { crypto } from "../../../../../../data/homeData";
import { CryptoLogo } from "../../../../../general";

const { greenprimary600, blackprimary100, whiteprimary600 } = Colors;

const SingleCrypto = () => {
  const navigation = useNavigation();
  const router: any = useRoute();
  const cryptoId = router.params?.cryptoId;

  const findCrypto = crypto.find((each) => each.id == cryptoId);
  //   console.log(findCrypto);

  const notificationHandler = () => {
    //
  };

  const infoHandler = () => {
    //
  };

  //   RENDER THE HEADER ICONS
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <>
            <OptionsIcons
              name="bells"
              handlePress={notificationHandler}
              color={greenprimary600}
            />
            <OptionsIcons
              name="infocirlceo"
              handlePress={infoHandler}
              color={blackprimary100}
            />
          </>
        );
      },
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <View>
        <View style={styles.imageContainer}>
          <CryptoLogo image={findCrypto?.image} />
        </View>
        <Text style={styles.textHeader}>
          {findCrypto?.cryptoAmt} {findCrypto?.name}
        </Text>
        <Text style={styles.amountValue}>≈ ${findCrypto?.cryptoValue}</Text>

        <CryptoBtns />
      </View>
    </ScreenWrapper>
  );
};

export default SingleCrypto;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  textHeader: {
    color: whiteprimary600,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 4,
  },
  amountValue: {
    color: blackprimary100,
    textAlign: "center",
  },
});
