import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View style={styles.screenContiner}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenContiner: {
    backgroundColor: "#000000",
    flex: 1,
  },
});
