import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { crypto } from "../../../../../data/homeData";
import CryptoCard from "./cryptoCard/cryptoCard";

const CryptoComp = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.cryptoCon}>
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
          keyExtractor={(each) => each.id.toString()}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default CryptoComp;

const styles = StyleSheet.create({
  cryptoCon: {
    marginBottom: 300,
  },
});
