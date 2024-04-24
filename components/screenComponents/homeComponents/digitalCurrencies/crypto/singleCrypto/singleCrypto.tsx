import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScreenWrapper } from "../../../../../wrappers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { OptionsIcons } from "../../../../../../assets/icons";
import { Colors } from "../../../../../../utils/colors";
import CryptoBtns from "./cryptoBtn";
import { crypto } from "../../../../../../data/homeData";
import { CryptoLogo } from "../../../../../general";

const { greenprimary600, blackprimary100 } = Colors;

const SingleCrypto = () => {
  const navigation = useNavigation();
  const router: any = useRoute();
  const cryptoId = router.params?.cryptoId;

  const findCrypto = crypto.find((each) => each.id == cryptoId);
  console.log(findCrypto);

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
        <CryptoLogo image={findCrypto?.image} />
        <Text>Crypto Amount</Text>
        <CryptoBtns />
      </View>
    </ScreenWrapper>
  );
};

export default SingleCrypto;

const styles = StyleSheet.create({});
