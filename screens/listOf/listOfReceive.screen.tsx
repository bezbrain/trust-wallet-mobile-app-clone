import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { InputField, SimplifiedCard } from "../../components/general";
import { ScreenWrapper } from "../../components/wrappers";
import { crypto } from "../../data/homeData";

const ListOfReceiveScreen = () => {
  const cryptoHandler = (id: number) => {
    // console.log(id);
  };

  return (
    <ScreenWrapper>
      <InputField />
      <FlatList
        data={crypto}
        renderItem={(eachObj) => (
          <SimplifiedCard
            name={eachObj.item.name}
            marketValue={eachObj.item.marketValue}
            image={eachObj.item.image}
            handlePress={() => cryptoHandler(eachObj.item.id)}
          />
        )}
        keyExtractor={(each) => each.id.toString()}
      />
    </ScreenWrapper>
  );
};

export default ListOfReceiveScreen;
