import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}
