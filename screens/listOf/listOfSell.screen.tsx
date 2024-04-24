import React from "react";
import { FlatList, Text, View } from "react-native";
import { ScreenWrapper } from "../../components/wrappers";
import { FullCard, InputField } from "../../components/general";
import { crypto } from "../../data/homeData";

const ListOfSellScreen = () => {
  const cryptoHandler = (id: number) => {
    //
  };

  return (
    <ScreenWrapper>
      <InputField />
      <FlatList
        data={crypto}
        renderItem={(eachObj) => (
          <FullCard
            name={eachObj.item.name}
            marketValue={eachObj.item.marketValue}
            cryptoAmt={eachObj.item.cryptoAmt}
            cryptoValue={eachObj.item.cryptoValue}
            increment={eachObj.item.increment}
            image={eachObj.item.image}
            handlePress={() => cryptoHandler(eachObj.item.id)}
          />
        )}
        keyExtractor={(each) => each.id.toString()}
      />
    </ScreenWrapper>
  );
};

export default ListOfSellScreen;
