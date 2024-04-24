import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "../bottomTabNav/bottomTabNav";
import { SingleCrypto } from "../../../components/screenComponents/homeComponents/digitalCurrencies/crypto";
import { generalStackOptions } from "./stackOptions/stackOptions";
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
        options={({ route }: any) => {
          const id = route.params?.cryptoId;
          const findCrypto = crypto.find((each) => each.id == id);

          return {
            title: findCrypto?.name,
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
