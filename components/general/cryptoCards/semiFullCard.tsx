import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../utils/colors";
import CryptoLogo from "../image/cryptoLogo";

const { greenprimary600, whiteprimary600, blackprimary100, redprimary700 } =
  Colors;

interface SemiFullCardProp {
  name: string;
  marketValue: string;
  cryptoAmt: string;
  cryptoValue: string;
  image: string;
  handlePress: () => void;
}

const SemiFullCard = ({
  name,
  marketValue,
  cryptoAmt,
  cryptoValue,
  image,
  handlePress,
}: SemiFullCardProp) => {
  return (
    <Pressable style={styles.cryptoContainer} onPress={handlePress}>
      <CryptoLogo image={image} />
      <View>
        <Text style={styles.whitishTextColor}>{name}</Text>
        <Text style={styles.grayishTextColor}>${marketValue} </Text>
      </View>
      <View style={styles.myValue}>
        <Text style={[styles.whitishTextColor, { marginLeft: "auto" }]}>
          {cryptoAmt}
        </Text>
        <Text style={[styles.grayishTextColor, { marginLeft: "auto" }]}>
          ${cryptoValue}
        </Text>
      </View>
    </Pressable>
  );
};

export default SemiFullCard;

const styles = StyleSheet.create({
  cryptoContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 36,
  },
  myValue: {
    marginLeft: "auto",
  },
  whitishTextColor: {
    color: whiteprimary600,
  },
  grayishTextColor: {
    color: blackprimary100,
    marginTop: 6,
  },
});
