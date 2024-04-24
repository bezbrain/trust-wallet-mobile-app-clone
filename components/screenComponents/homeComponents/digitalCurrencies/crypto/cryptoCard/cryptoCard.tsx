import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../../../../utils/colors";

const { greenprimary600, whiteprimary600, blackprimary100, redprimary700 } =
  Colors;

interface CryptoCardProp {
  name: string;
  marketValue: string;
  increment: string;
  cryptoAmt: string;
  cryptoValue: string;
  image: string;
  handlePress: () => void;
}

const CryptoCard = ({
  name,
  marketValue,
  increment,
  cryptoAmt,
  cryptoValue,
  image,
  handlePress,
}: CryptoCardProp) => {
  return (
    <Pressable style={styles.cryptoContainer} onPress={handlePress}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.marketValue}>
        <Text style={styles.whitishTextColor}>{name}</Text>
        <Text style={styles.grayishTextColor}>
          ${marketValue}{" "}
          <Text
            style={
              increment.includes("+")
                ? styles.greenishTextColor
                : styles.redishTextColor
            }
          >
            {increment}
          </Text>
        </Text>
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

export default CryptoCard;

const styles = StyleSheet.create({
  cryptoContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 36,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  marketValue: {
    //
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
  greenishTextColor: {
    color: greenprimary600,
  },
  redishTextColor: {
    color: redprimary700,
  },
});
