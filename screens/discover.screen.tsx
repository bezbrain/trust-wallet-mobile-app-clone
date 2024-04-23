import React, { useLayoutEffect } from "react";
import { ScreenWrapper } from "../components/wrappers";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { OptionsIcons } from "../assets/icons";

const { whiteprimary600 } = Colors;

const DiscoverScreen = () => {
  const navigation = useNavigation();

  const handleDiscoveryOptionClick = () => {
    //
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // <OptionsIcons name="" handlePress={handleDiscoveryOptionClick} />
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={whiteprimary600}
            onPress={handleDiscoveryOptionClick}
            style={{ marginHorizontal: 8 }}
          />
        );
      },
    });
  }, []);

  return (
    <ScreenWrapper>
      <Text style={styles.text}>Discover Screen</Text>
    </ScreenWrapper>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
