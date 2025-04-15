import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [uri, setUri] = useState(null);

  return (
    <GestureHandlerRootView>
      <Screen>
        <ImageInput imageUri={uri} onChangeImage={(uri) => setUri(uri)} />
      </Screen>
    </GestureHandlerRootView>
  );
}
