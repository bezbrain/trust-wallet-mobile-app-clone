import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  discoverOptions,
  earnOptions,
  generalTabOptions,
  homeOptions,
  swapOptions,
} from "./tabOptions/tabOptions";
import EarnScreen from "../../earn.screen";
import HomeScreen from "../../home.screen";
import SwapScreen from "../../swap.screen";
import DiscoverScreen from "../../discover.screen";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator screenOptions={generalTabOptions}>
      <BottomTab.Screen
        name="WalletHome"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
          ...homeOptions,
        }}
      />
      <BottomTab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="swap" size={size} color={color} />;
          },
          ...swapOptions,
        }}
      />
      <BottomTab.Screen
        name="Earn"
        component={EarnScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="vector-circle"
                size={size}
                color={color}
              />
            );
          },
          ...earnOptions,
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="codepen-circle" size={size} color={color} />
            );
          },
          ...discoverOptions,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
