import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNav } from "./screens";
import { HomeProvider } from "./context/homeContext/homeContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <HomeProvider>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </HomeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // color: "#df0d0d",
  },
});
