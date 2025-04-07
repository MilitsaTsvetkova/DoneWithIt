import { View } from "react-native";

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
      <View
        style={{
          backgroundColor: "blue",
          // flexBasis: 100, //width or height of the item
          width: 400,
          // flexGrow: 1, //if the screen is not enough, it will grow to fill the space
          // flexShrink: 1, //if the screen is not enough, it will shrink to fit the space
          // flex: 1, //flexGrow + flexShrink
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
