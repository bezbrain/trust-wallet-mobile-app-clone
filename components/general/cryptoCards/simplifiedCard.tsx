import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../utils/colors";
import CryptoLogo from "../image/cryptoLogo";

const { greenprimary600, whiteprimary600, blackprimary100, redprimary700 } =
  Colors;

interface SimplifiedCardProp {
  name: string;
  marketValue: string;
  image: string;
  handlePress: () => void;
}

const SimplifiedCard = ({
  name,
  marketValue,
  image,
  handlePress,
}: SimplifiedCardProp) => {
  return (
    <Pressable style={styles.cryptoContainer} onPress={handlePress}>
      <CryptoLogo image={image} />
      <View>
        <Text style={styles.whitishTextColor}>{name}</Text>
        <Text style={styles.grayishTextColor}>${marketValue} </Text>
      </View>
    </Pressable>
  );
};

export default SimplifiedCard;

const styles = StyleSheet.create({
  cryptoContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 36,
  },
  whitishTextColor: {
    color: whiteprimary600,
  },
  grayishTextColor: {
    color: blackprimary100,
    marginTop: 6,
  },
});
