import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}
