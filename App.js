import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker
          placeholder="Category"
          icon="apps"
          items={categories}
          selectedItem={category}
          onItemSelect={setCategory}
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
