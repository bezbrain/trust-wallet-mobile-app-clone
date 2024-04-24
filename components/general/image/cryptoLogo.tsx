import React from "react";
import { Image, StyleSheet } from "react-native";

interface CryptoLogo {
  image: string | undefined;
}

const CryptoLogo = ({ image }: CryptoLogo) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.image}
    />
  );
};

export default CryptoLogo;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
