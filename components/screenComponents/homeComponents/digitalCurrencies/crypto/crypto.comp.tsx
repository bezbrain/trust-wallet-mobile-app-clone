import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { FlatList } from "react-native-gesture-handler";
import { crypto } from "../../../../../data/homeData";
import CryptoCard from "./cryptoCard/cryptoCard";

const { whiteprimary600, blackprimary100, greenprimary600 } = Colors;

const CryptoComp = () => {
  return (
    <GestureHandlerRootView>
      <FlatList
        data={crypto}
        renderItem={(eachObj) => (
          <CryptoCard
            id={eachObj.item.id}
            name={eachObj.item.name}
            marketValue={eachObj.item.marketValue}
            increment={eachObj.item.increment}
            cryptoAmt={eachObj.item.cryptoAmt}
            cryptoValue={eachObj.item.cryptoValue}
            image={eachObj.item.image}
          />
        )}
        // keyExtractor={(each) => each.id}
      />
    </GestureHandlerRootView>
  );
};

export default CryptoComp;
