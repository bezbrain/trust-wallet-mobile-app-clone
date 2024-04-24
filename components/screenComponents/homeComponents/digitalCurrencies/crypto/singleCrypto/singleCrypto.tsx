import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { ScreenWrapper } from "../../../../../wrappers";
import { useNavigation } from "@react-navigation/native";
import { OptionsIcons } from "../../../../../../assets/icons";
import { Colors } from "../../../../../../utils/colors";

const { greenprimary600, blackprimary100 } = Colors;

const SingleCrypto = () => {
  const navigation = useNavigation();

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
      <Text style={{ color: "#ccc" }}>Single Page</Text>
    </ScreenWrapper>
  );
};

export default SingleCrypto;
