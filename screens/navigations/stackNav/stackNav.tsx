import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "../bottomTabNav/bottomTabNav";
import { SingleCrypto } from "../../../components/screenComponents/homeComponents/digitalCurrencies/crypto";
import { generalStackOptions, singleCrypto } from "./stackOptions/stackOptions";
import { Colors } from "../../../utils/colors";
import ListOfSendScreen from "../../listOf/listOfSend.screen";
import ListOfReceiveScreen from "../../listOf/listOfReceive.screen";
import ListOfBuyScreen from "../../listOf/listOfBuy.screen";
import ListOfSellScreen from "../../listOf/listOfSell.screen";
import TransactionHistoryScreen from "../../transactionHistory.screen";
import SearchScreen from "../../search.screen";

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

      {/* Acivities Screens Routing */}
      <Stack.Screen name="Send" component={ListOfSendScreen} />
      <Stack.Screen name="Receive" component={ListOfReceiveScreen} />
      <Stack.Screen name="Buy" component={ListOfBuyScreen} />
      <Stack.Screen name="Sell" component={ListOfSellScreen} />
      <Stack.Screen name="History" component={TransactionHistoryScreen} />

      {/* Search Screen */}
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
