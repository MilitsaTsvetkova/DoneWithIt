import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row", //horizontal axis // column - vertical axis
        justifyContent: "center", //main axis
        alignItems: "center", //secondary axis on each line
        // alignContent: "center", //align the content in the container
        // flexWrap: "wrap", //if the screen is not enough, it will wrap to the next line
      }}
    >
      <WelcomeScreen />
    </View>
  );
}
