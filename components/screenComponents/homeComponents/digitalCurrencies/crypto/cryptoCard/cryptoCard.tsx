import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../../utils/colors";

const { greenprimary600, whiteprimary600, blackprimary100 } = Colors;

interface CryptoCardProp {
  id: number;
  name: string;
  marketValue: string;
  increment: string;
  cryptoAmt: string;
  cryptoValue: string;
  image: string;
}

const CryptoCard = ({
  id,
  name,
  marketValue,
  increment,
  cryptoAmt,
  cryptoValue,
  image,
}: CryptoCardProp) => {
  return (
    <View style={styles.cryptoContainer}>
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
          <Text style={styles.greenishTextColor}>{increment}</Text>
        </Text>
      </View>
      <View style={styles.myValue}>
        <Text style={styles.whitishTextColor}>{cryptoAmt}</Text>
        <Text style={[styles.grayishTextColor, { marginLeft: "auto" }]}>
          ${cryptoValue}
        </Text>
      </View>
    </View>
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
});
