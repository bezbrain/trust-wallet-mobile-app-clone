import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "../bottomTabNav/bottomTabNav";
import { SingleCrypto } from "../../../components/screenComponents/homeComponents/digitalCurrencies/crypto";
import { generalStackOptions, singleCrypto } from "./stackOptions/stackOptions";
import { Colors } from "../../../utils/colors";
import { crypto } from "../../../data/homeData";

const { blackprimary900, whiteprimary600, greenprimary600 } = Colors;

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={generalStackOptions}>
      <Stack.Screen
        name="WalletPreview"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SinglePage"
        component={SingleCrypto}
        options={({ route }: any) => singleCrypto(route)}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
