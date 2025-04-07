import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello App!</Text>
      <Image
        //  source={require('./assets/icon.png')}
        source={{
          uri: "https://example.com/icon.png",
          width: 200,
          height: 300,
        }}
      />
      */}

      <Button
        title="Click Me"
        // onPress={() =>
        //   Alert.alert({
        //     title: "Button Pressed",
        //     message: "You clicked the button!",
        //     buttons: [
        //       {
        //         text: "OK",
        //         onPress: () => console.log("OK Pressed"),
        //       },
        //       {
        //         text: "Cancel",
        //         onPress: () => console.log("Cancel Pressed"),
        //       },
        //     ],
        //   })
        // }
        onPress={() =>
          Alert.prompt("Button Pressed", "You clicked the button!", (text) =>
            console.log(text)
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
