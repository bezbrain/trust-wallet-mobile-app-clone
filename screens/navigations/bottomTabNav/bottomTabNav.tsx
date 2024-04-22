import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletPreview from "../../walletPreview";
import { Feather } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="home" size={size} color={color} />;
        },
      }}
    >
      <BottomTab.Screen
        name="WalletHome"
        component={WalletPreview}
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
