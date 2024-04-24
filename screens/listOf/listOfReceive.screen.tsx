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
      <View style={styles.cryptoCon}>
        <FlatList
          data={crypto}
          renderItem={(eachObj) => (
            <SimplifiedCard
              name={eachObj.item.name}
              marketValue={eachObj.item.marketValue}
              cryptoAmt={eachObj.item.cryptoAmt}
              cryptoValue={eachObj.item.cryptoValue}
              image={eachObj.item.image}
              handlePress={() => cryptoHandler(eachObj.item.id)}
            />
          )}
          keyExtractor={(each) => each.id.toString()}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ListOfReceiveScreen;

const styles = StyleSheet.create({
  cryptoCon: {
    // marginBottom: 300,
    // flex: 1,
  },
});
