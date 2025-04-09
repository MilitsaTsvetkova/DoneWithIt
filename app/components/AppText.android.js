import { StyleSheet, Text } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
});

export default AppText;
