import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { crypto } from "../../../../../data/homeData";
import { useNavigation } from "@react-navigation/native";
import { FullCard } from "../../../../general";

const CryptoComp = () => {
  const navigation: any = useNavigation();

  const cryptoHandler = (id: number) => {
    navigation.navigate("SinglePage", {
      cryptoId: id,
    });
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.cryptoCon}>
        <FlatList
          data={crypto}
          renderItem={(eachObj) => (
            <FullCard
              name={eachObj.item.name}
              marketValue={eachObj.item.marketValue}
              increment={eachObj.item.increment}
              cryptoAmt={eachObj.item.cryptoAmt}
              cryptoValue={eachObj.item.cryptoValue}
              image={eachObj.item.image}
              handlePress={() => cryptoHandler(eachObj.item.id)}
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
