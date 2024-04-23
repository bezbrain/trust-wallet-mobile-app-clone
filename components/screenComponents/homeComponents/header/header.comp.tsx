import React from "react";
import { InputField } from "../../../general";
import { View } from "react-native";
import ChangeAccount from "./changeAccount/changeAccount";
import CurrentAmount from "./currentAmount/currentAmount";

const HeaderComp = () => {
  return (
    <View>
      <InputField />
      <ChangeAccount />
      <CurrentAmount />
    </View>
  );
};

export default HeaderComp;
