import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalletPreview from "../../home.screen";
import BottomTabNav from "../bottomTabNav/bottomTabNav";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletPreview"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
