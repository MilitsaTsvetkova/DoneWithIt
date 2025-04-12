import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <AccountScreen />
    </GestureHandlerRootView>
  );
}
