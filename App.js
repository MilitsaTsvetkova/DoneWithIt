import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";

export default function App() {
  const requestPermissions = async () => {
    //alternative - can use this to request multiple permissions
    // const { granted } = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permissions.CAMERA
    // );
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };
  useEffect(() => {
    requestPermissions();
  }, []);
  return (
    <GestureHandlerRootView>
      <Screen>
        <Text>test</Text>
      </Screen>
    </GestureHandlerRootView>
  );
}
