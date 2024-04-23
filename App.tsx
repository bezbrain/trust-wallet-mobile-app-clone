import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNav } from "./screens";

export default function App() {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // color: "#5c5b5b",
  },
});
