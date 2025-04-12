import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppTextInput placeholder="Email" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
