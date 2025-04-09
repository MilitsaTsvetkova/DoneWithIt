import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default styles;
