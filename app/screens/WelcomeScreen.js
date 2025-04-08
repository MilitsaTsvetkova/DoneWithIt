import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/adaptive-icon.png")}
      style={styles.background}
    >
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});
