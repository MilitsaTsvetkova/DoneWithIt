import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function OfflineNotice() {
  const { type, isInternetReachable } = useNetInfo();

  if (type !== "unknown" && !isInternetReachable) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
