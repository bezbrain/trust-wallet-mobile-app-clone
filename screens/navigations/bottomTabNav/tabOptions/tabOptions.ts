import { Colors } from "../../../../utils/colors";

const { blackprimary900, whiteprimary600, greenprimary600 } = Colors;

export const generalTabOptions = {
  headerStyle: { backgroundColor: blackprimary900 },
  headerTintColor: whiteprimary600,
  tabBarStyle: { backgroundColor: blackprimary900 },
  tabBarActiveTintColor: greenprimary600,
};

export const homeOptions = {
  title: "Home",
  tabBarLabel: "Home",
};

export const swapOptions = {
  title: "Swap",
  tabBarLabel: "Swap",
};

export const earnOptions = {
  title: "Earn",
  tabBarLabel: "Earn",
};

export const discoverOptions = {
  title: "Discover",
  tabBarLabel: "Discover",
};
