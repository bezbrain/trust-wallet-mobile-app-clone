import React, { useEffect, useState } from "react";
import { InputField } from "../../../general";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import ChangeAccount from "./changeAccount/changeAccount";
import CurrentAmount from "./currentAmount/currentAmount";
import { useNavigation } from "@react-navigation/native";

const HeaderComp = () => {
  const navigation: any = useNavigation();

  const searchHandler = () => {
    navigation.navigate("Search");
  };

  // useEffect(() => {
  //   Keyboard.dismiss();
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <InputField handlePress={searchHandler} isFocus={false} />
        <ChangeAccount />
        <CurrentAmount />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderComp;
