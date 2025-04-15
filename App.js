import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris((prev) => [...prev, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris((prev) => prev.filter((imageUri) => imageUri !== uri));
  };

  return (
    <GestureHandlerRootView>
      <Screen>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
